"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  message: z.string().optional(),
  phone: z
    .string()
    .min(1, "Enter phone number")
    .regex(/^\d{10}$/, { message: "Phone number is invalid" }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("Please enter a valid email")
    .superRefine((val, ctx) => {
      const personalDomains = [
        "gmail.com",
        "yahoo.com",
        "hotmail.com",
        "outlook.com",
        "aol.com",
        "icloud.com",
        "protonmail.com",
        "mail.com",
        "zoho.com",
        "gmx.com",
      ];

      if (val.includes("@")) {
        const domain = val.split("@")[1].toLowerCase();
        if (personalDomains.includes(domain)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Please enter a business email",
          });
        }
      }
    }),
});

// Airtable API configuration
const AIRTABLE_BASE_ID = "app3HXJpaP3B3WZDR";
const AIRTABLE_TABLE_ID = "tbliRrcqysisF5jNU";
const AIRTABLE_API_KEY =
  "pattkmntuDznmuXl9.a3c50cf70ff2b38e6a7d0021bd86e84bb4beba036bdb42e482a209bf55867f16";

export default function LeadForm() {
  const [errorMessage, setErrorMessage] = useState<string | false>(false);
  const [loading, setLoading] = useState(false);
  const [isDone, setDone] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      phone: "",
      message: "",
      name: "",
    },
  });

  const transformToAirtablePayload = (data: any): any => {
    return {
      fields: {
        Name: data.name,
        Email: data.email,
        "Phone Number": data.phone,
        LinkedIn: "",
        Message: data.message,
      },
    };
  };

  // Check if email already exists in Airtable
  const checkEmailExists = async (email: string): Promise<boolean> => {
    if (!email) return false;

    setCheckingEmail(true);

    try {
      // Check if the email already exists using filterByFormula
      // Properly encode the formula to handle special characters
      const formula = encodeURIComponent(`LOWER({Email}) = LOWER("${email}")`);
      const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}?filterByFormula=${formula}`;

      const headers = {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      };

      const response = await fetch(url, {
        method: "GET",
        headers,
      });

      if (!response.ok) {
        console.error(
          "Airtable API error:",
          response.status,
          await response.text()
        );
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // If we have any records with this email, it exists
      const exists = data.records && data.records.length > 0;
      setEmailExists(exists); // Set the state for button disabling
      return exists;
    } catch (error) {
      console.error("Error checking email:", error);
      // In case of error, we'll continue with form submission
      return false;
    } finally {
      setCheckingEmail(false);
    }
  };

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setErrorMessage(false);
    setLoading(true);
    setDone(false);

    try {
      // Final check if email already exists
      const doesEmailExist = await checkEmailExists(data.email);

      if (doesEmailExist) {
        setErrorMessage(
          "This email has already been submitted. Please use a different email address."
        );
        setLoading(false);
        return;
      }

      // Check if email is a business email before submission
      const personalDomains = [
        "gmail.com",
        "yahoo.com",
        "hotmail.com",
        "outlook.com",
        "aol.com",
        "icloud.com",
        "protonmail.com",
        "mail.com",
        "zoho.com",
        "gmx.com",
      ];

      if (data.email.includes("@")) {
        const domain = data.email.split("@")[1].toLowerCase();
        if (personalDomains.includes(domain)) {
          setErrorMessage("Please enter a business email");
          setLoading(false);
          return;
        }
      }

      // If email doesn't exist and is a business email, proceed with submission
      const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`;
      const headers = {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      };

      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(transformToAirtablePayload(data)),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Form submission error:", response.status, errorText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setDone(true);
      form.reset(); // Reset the form after successful submission
      setEmailExists(false); // Reset email exists state
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "Something went wrong while submitting the form. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  // Handle email field blur for early validation
  const handleEmailBlur = async (email: string) => {
    // Only check if email is valid
    if (email && email.includes("@") && !form.formState.errors.email) {
      try {
        const exists = await checkEmailExists(email);
        if (exists) {
          form.setError("email", {
            type: "manual",
            message: "Email already exists",
          });
        } else {
          // Clear existing error if email doesn't exist
          if (form.formState.errors.email) {
            form.clearErrors("email");
          }
        }
      } catch (error) {
        console.error("Error checking email on blur:", error);
      }
    }
  };
  const { formState } = form;
  const { isDirty } = formState;

  // Watch for email changes to clear "email exists" error and state when user edits
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "email" && emailExists) {
        setEmailExists(false);
        // Clear error when user starts typing again
        if (form.formState.errors.email) {
          form.clearErrors("email");
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form, emailExists]);

  // Check if form is valid and email doesn't exist
  const isSubmitDisabled = !isDirty
    ? false
    : !form.formState.isValid ||
      loading ||
      isDone ||
      checkingEmail ||
      emailExists;

  return (
    <>
      <div className="rounded-lg w-full py-6 md:py-10 max-w-3xl mx-auto px-4 md:px-10 bg-white bg-opacity-40 border-fire-600 border-[1px] border-solid border-opacity-30 shadow">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="text-base text-fire-900">
                  <FormLabel className="text-base text-fire-900">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="text-base text-fire-900">
                    <FormLabel className="text-base text-fire-900">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="info@email.com"
                        {...field}
                        onBlur={(e) => {
                          field.onBlur();
                          handleEmailBlur(e.target.value);
                        }}
                      />
                    </FormControl>
                    {checkingEmail && (
                      <p className="text-xs text-amber-600">
                        Checking email availability...
                      </p>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="text-base text-fire-900">
                    <FormLabel className="text-base text-fire-900">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 9876543210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="text-bas">
                  <FormLabel className="font-inter text-base text-fire-900">
                    Message for us{" "}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="text-base text-fire-900"
                      cols={5}
                      rows={8}
                      placeholder="Enter some message for us"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end mt-2">
              <Button size="lg" variant="default" type="submit">
                {loading || checkingEmail
                  ? "Loading..."
                  : isDone
                  ? "Submitted"
                  : "Submit"}
              </Button>
            </div>
            {errorMessage && (
              <span className="text-sm text-red-600 pt-2 block">
                {errorMessage}
              </span>
            )}
            {isDone && (
              <span className="text-sm text-fire-900 pt-2 block">
                Your form has been submitted. Our team will be in touch with you
                soon.
              </span>
            )}
          </form>
        </Form>
      </div>
    </>
  );
}
