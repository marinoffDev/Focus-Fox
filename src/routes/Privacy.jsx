import LegalPageLayout from "@/components/LegalPageLayout";
import { Link } from "react-router-dom";

export default function Privacy() {
  
  return (
    <LegalPageLayout 
      navigateToRoute={"/Focus-Fox/Terms/"} 
      navigateToRouteLabel={"Terms and Conditions"} 
      pageTitle={"Privacy Policy"} 
      effectiveDateText={"October 5th 2024"}
    >
      <p className="py-2">
        Focus Fox ({`"we", "us", or "our"`}) provides a web-based Pomodoro technique timer at <Link to="/Focus-Fox/" className="underline">https://marinoffdev.github.io/Focus-Fox/</Link> (the {`"Service"`}). This Privacy Policy outlines what data is collected, how it is used, and your choices regarding that data.
      </p>
      <h2 className="text-3xl font-bold pt-4">Information We Collect</h2>
      <p className="py-2">
        Focus Fox does not collect or store any personal data from its users. We do not use tracking technologies such as analytics, nor do we collect information like IP addresses, browser details, or any user identifiers.
      </p>
      <h2 className="text-3xl font-bold pt-4">Cookies and Preferences</h2>
      <p className="py-2">
        {`Focus Fox currently does not use cookies. However, in the future, we plan to implement cookies to store your Pomodoro timer settings, theme preferences, and notification sound choices. These cookies will be used solely to improve your experience by saving your preferences, ensuring you don't have to reconfigure settings on each visit.`}
      </p>
      <h2 className="text-3xl font-bold pt-4">External Links and Services</h2>
      <p className="py-2">
        Focus Fox may provide links to external platforms like GitHub Sponsorships or Ko-Fi for donations. These platforms may collect personal data in accordance with their own privacy policies, which we do not control.
      </p>
      <h2 className="text-3xl font-bold pt-4">Data Security</h2>
      <p className="py-2">
        Focus Fox does not store personal data, but we still strive to ensure a secure browsing experience. Nevertheless, please be aware that no method of data transmission or storage on the web is entirely secure.
      </p>
      <h2 className="text-3xl font-bold pt-4">Changes to This Privacy Policy</h2>
      <p className="py-2">
        We may update this Privacy Policy from time to time to reflect changes in our practices. Any updates will be posted on this page with a revised effective date. Continuing to use the Service after these changes means you accept the new policy.
      </p>
      <h2 className="text-3xl font-bold pt-4">Contact Us</h2>
      <p className="py-2">
        For any questions or concerns regarding this Privacy Policy, please reach out via opening a new issue on <a href="https://github.com/marinoffDev/Focus-Fox/issues" target="_blank" className="underline" >https://github.com/marinoffDev/Focus-Fox/issues</a>.
      </p>
    </LegalPageLayout>
  );
}