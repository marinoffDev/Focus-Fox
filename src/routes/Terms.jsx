import LegalPageLayout from "@/components/LegalPageLayout";
import { Link } from "react-router-dom";

export default function Terms() {
  
  return (
    <LegalPageLayout 
      navigateToRoute={"/Focus-Fox/Privacy/"} 
      navigateToRouteLabel={"Privacy Policy"} 
      pageTitle={"Terms and Conditions"} 
      effectiveDateText={"October 5th 2024"}
    >
      <p className="py-2">
        Focus Fox ({`"we", "us", or "our"`}) provides a web-based Pomodoro technique timer at <Link to="/Focus-Fox/" className="underline">https://marinoffdev.github.io/Focus-Fox/</Link> (the {`"Service"`}). By accessing or using the Focus Fox website you agree to comply with and be bound by the following terms and conditions.
      </p>
      <h2 className="text-3xl font-bold pt-4">Use of the Service</h2>
      <p className="py-2">
        Focus Fox is an open-source web application that provides a Pomodoro timer tool. You may use the Service freely, but only for personal and non-commercial purposes. Modifying, redistributing, or reselling the Service or any part of its code or content without permission is prohibited.
      </p>
      <h2 className="text-3xl font-bold pt-4">Open Source, Contributions, and License</h2>
      <p className="py-2">
        Focus Fox is open-source software, and contributions are welcome through our GitHub repository. The code is licensed under the <strong>Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)</strong>. Under this license, you are free to:
      </p>
      <ul>
        <li>
        – Copy and redistribute the code in any medium or format
        </li>
        <li>
        – Remix, transform, and build upon the code
        </li>
      </ul>
      <p className="py-2" >However, these activities are limited to <strong>non-commercial</strong> use. Any use of the code must include proper attribution by crediting the original source, Focus Fox, and linking to the license. You may not use the code for commercial purposes.</p>
      <p className="py-2">By submitting contributions (such as code or ideas) to the project, you agree that your contributions will also be subject to the terms of the CC BY-NC 4.0 license. Your contributions may be used, modified, or redistributed under the same non-commercial terms.</p>
      <p className="py-2">If you wish to contribute, please submit a GitHub issue for discussion before opening a pull request.</p>
      <p className="py-2">For more details about the license, visit <a href="https://creativecommons.org/licenses/by-nc/4.0/" className="underline">CC BY-NC 4.0</a>.</p>
      <h2 className="text-3xl font-bold pt-4">Disclaimer of Warranty</h2>
      <p className="py-2">
        The Service, including all code licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0), is provided {`"as is,"`} without any warranties of any kind. We make no guarantees regarding the reliability, availability, or performance of the Service. Focus Fox is offered without any support or guarantees that it will meet your expectations or be free from errors, interruptions, or inaccuracies.
      </p>
      <h2 className="text-3xl font-bold pt-4">Limitation of Liability</h2>
      <p className="py-2">
        To the fullest extent permitted by law, Focus Fox and its creators are not liable for any damages arising out of your use of the Service, including but not limited to direct, indirect, incidental, or consequential damages.
      </p>
      <h2 className="text-3xl font-bold pt-4">External Links and Donations</h2>
      <p className="py-2">
        The Service may contain links to external websites, such as GitHub Sponsorships or Ko-Fi for voluntary donations. These external services operate independently and have their own terms and privacy policies, which you are encouraged to review. Focus Fox is not responsible for the content or practices of any linked websites or services.
      </p>
      <h2 className="text-3xl font-bold pt-4">Changes to These Terms</h2>
      <p className="py-2">
      We reserve the right to modify these terms at any time. Any changes will be reflected on this page with an updated {`"Effective Date."`} By continuing to use the Service after any changes are made, you agree to the updated Terms and Conditions.
      </p>
      <h2 className="text-3xl font-bold pt-4">Contact Us</h2>
      <p className="py-2">
        For any questions or concerns regarding these Terms, please reach out via opening a new issue on <a href="https://github.com/marinoffDev/Focus-Fox/issues" target="_blank" className="underline" >https://github.com/marinoffDev/Focus-Fox/issues</a>.
      </p>
    </LegalPageLayout>
  );
}