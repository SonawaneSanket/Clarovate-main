import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-bg blade-top-padding blade-bottom-padding">
      <div className="w-container grid space-y-10 md:space-y-0 md:grid-cols-11">
        <div className="col-span-4 flex flex-col items-start">
          <div>
            <Image
              src="/logo_light.svg"
              alt="logo for the site"
              width={240}
              className="mr-auto w-auto h-16 md:h-14"
              height={60}
            />{" "}
          </div>{" "}
          <div className="grid gap-2 pt-10 pb-8">
            {" "}
            <span className="text-sm xl:text-base text-white font-medium">
              {" "}
              Where Clarity Meets Innovation.{" "}
            </span>{" "}
            <span className="text-xs text-white text-opacity-70">
              {" "}
              © 2025 Clarovate. All Rights Reserved.{" "}
            </span>{" "}
          </div>{" "}
          <div className="flex items-center">
            {" "}
            <Link
              href="https://www.linkedin.com/company/clarovate/about/?viewAsMember=true"
              target="_blank"
            >
              {" "}
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clipPath="url(#clip0_45_327)">
                  {" "}
                  <path
                    d="M25.0142 0.651367H2.33466C1.04526 0.651367 0 1.67174 0 2.93044V25.07C0 26.3287 1.04526 27.349 2.33466 27.349H25.0142C26.3036 27.349 27.3488 26.3287 27.3488 25.07V2.93044C27.3488 1.67174 26.3036 0.651367 25.0142 0.651367Z"
                    fill="none"
                  />{" "}
                  <path
                    d="M24.7442 4.88373V23.7675C24.7442 24.1992 24.5728 24.6133 24.2673 24.9185C23.9621 25.2239 23.5481 25.3954 23.1163 25.3954H4.23255C3.80083 25.3954 3.38682 25.2239 3.08154 24.9185C2.77613 24.6133 2.60468 24.1992 2.60468 23.7675V4.88373C2.60468 4.45201 2.77613 4.038 3.08154 3.73272C3.38682 3.42744 3.80083 3.25586 4.23255 3.25586H23.1163C23.5481 3.25586 23.9621 3.42744 24.2673 3.73272C24.5728 4.038 24.7442 4.45201 24.7442 4.88373ZM9.11628 11.721H5.86054V22.1395H9.11628V11.721ZM9.40938 8.1396C9.41111 7.89335 9.36424 7.64908 9.27163 7.42092C9.17889 7.19276 9.04224 6.98502 8.8693 6.80975C8.69637 6.63435 8.49059 6.49475 8.26366 6.39894C8.03686 6.30312 7.79332 6.25294 7.54696 6.25122H7.48841C6.98757 6.25122 6.50726 6.45022 6.15315 6.80433C5.79904 7.15844 5.60003 7.63875 5.60003 8.1396C5.60003 8.64044 5.79904 9.12075 6.15315 9.47485C6.50726 9.82896 6.98757 10.028 7.48841 10.028C7.73465 10.034 7.97979 9.99144 8.20967 9.90276C8.43943 9.81408 8.64963 9.681 8.82798 9.51114C9.00632 9.34116 9.14949 9.13772 9.24924 8.91251C9.34899 8.68718 9.40348 8.4445 9.40938 8.19826V8.1396ZM21.4883 15.8103C21.4883 12.6782 19.4958 11.4605 17.5163 11.4605C16.8682 11.4281 16.2228 11.5662 15.6447 11.8609C15.0665 12.1557 14.5758 12.5969 14.2214 13.1405H14.1303V11.721H11.0698V22.1395H14.3256V16.5981C14.2785 16.0306 14.4573 15.4674 14.8231 15.031C15.1889 14.5945 15.7121 14.32 16.279 14.2671H16.4028C17.4382 14.2671 18.2065 14.9182 18.2065 16.5591V22.1395H21.4624L21.4883 15.8103Z"
                    fill="#F8F6EB"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_45_327">
                    {" "}
                    <rect width={28} height={28} fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        {/* Links Section */}{" "}
        <div className="col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
          {" "}
          <div className="flex flex-col gap-4 md:gap-7">
            {" "}
            <span className="text-xl text-white font-medium">Company</span>{" "}
            <div className="flex flex-col items-start gap-4">
              {" "}
              <Link href="/" className="text-link text-sm">
                {" "}
                Home{" "}
              </Link>{" "}
              <Link href="/about" className="text-link text-sm">
                {" "}
                About us{" "}
              </Link>{" "}
              <Link href="/why-clarovate" className="text-link text-sm">
                {" "}
                Why clarovate{" "}
              </Link>{" "}
              <Link href="/get-in-touch" className="text-link text-sm">
                {" "}
                Get in touch{" "}
              </Link>{" "}
              <Link href="/terms-and-policies" className="text-link text-sm">
                {" "}
                Terms and policies{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex flex-col gap-4 md:gap-7">
            {" "}
            <span className="text-xl text-white font-medium">
              Services
            </span>{" "}
            <div className="flex flex-col items-start gap-4">
              {" "}
              <Link
                href="/services/content-syndication"
                className="text-link text-sm"
              >
                {" "}
                Content Syndication{" "}
              </Link>{" "}
              <Link
                href="/services/telemarketing-and-appointment-setting"
                className="text-link text-sm"
              >
                {" "}
                Telemarketing & Appointment Setting{" "}
              </Link>{" "}
              <Link
                href="/services/sdr-as-service"
                className="text-link text-sm"
              >
                {" "}
                SDR as a Service{" "}
              </Link>{" "}
              <Link
                href="/services/data-services"
                className="text-link text-sm"
              >
                {" "}
                Data Services{" "}
              </Link>{" "}
              <Link
                href="/services/programmatic-advertising"
                className="text-link text-sm"
              >
                {" "}
                Programmatic Advertising{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex flex-col gap-4 md:gap-7">
            {" "}
            <span className="text-xl text-white font-medium">
              Resources
            </span>{" "}
            <div className="flex flex-col items-start gap-4">
              {" "}
              <Link href="/resources/blogs" className="text-link text-sm">
                {" "}
                Blogs{" "}
              </Link>{" "}
              <Link
                href="/resources/white-papers"
                className="text-link text-sm"
              >
                {" "}
                White papers{" "}
              </Link>{" "}
              <Link href="/resources/articles" className="text-link text-sm">
                {" "}
                Articles{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
