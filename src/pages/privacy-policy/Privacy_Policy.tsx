import React from "react";
import { Container } from "react-bootstrap";
import Buttons from "../../components/Buttons";
import { useNavigate, useLocation } from "react-router";
import Header from "../../layouts/header/Header";

const Privacy_Policy = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleRedirect = () => {
    location.search === "?from=login" ? navigate("/") : navigate("/signup");
  };

  const Terms_of_use = [
    {
      Terms_of_use:
        " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      Terms_of_use:
        " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      Terms_of_use:
        " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Container>
          <div className="login-card">
            <Header />
            <div className="login">
              <h2>ONLINE PRIVACY POLICY AGREEMENT</h2>
              {/* <ol>
                                {Terms_of_use.map((item) => (
                                    <li className='mb-3 Terms'>{item.Terms_of_use}</li>
                                ))}
                            </ol> */}
              <div>
                <p>January 1, 1970</p>
                <p>
                  Uncommon: Christian Dating ( ) values its users' privacy. This
                  Privacy Policy ("Policy") will help you understand how we
                  collect and use personal information from those who visit our
                  website or make use of our online facilities and services, and
                  what we will and will not do with the information we collect.
                  Our Policy has been designed and created to ensure those
                  affiliated with Uncommon: Christian Dating of our commitment
                  and realization of our obligation not only to meet, but to
                  exceed, most existing privacy standards.
                </p>
              </div>
              <div>
                <p>
                  We reserve the right to make changes to this Policy at any
                  given time. If you want to make sure that you are up to date
                  with the latest changes, we advise you to frequently visit
                  this page. If at any point in time Uncommon: Christian Dating
                  decides to make use of any personally identifiable information
                  on file, in a manner vastly different from that which was
                  stated when this information was initially collected, the user
                  or users shall be promptly notified by email. Users at that
                  time shall have the option as to whether to permit the use of
                  their information in this separate manner.
                </p>
              </div>
              <div>
                <p>
                  This Policy applies to Uncommon: Christian Dating, and it
                  governs any and all data collection and usage by us. Through
                  the use of www.uncommonchristiandating.com, you are therefore
                  consenting to the data collection procedures expressed in this
                  Policy.
                </p>
              </div>
              <div>
                <p>
                  Please note that this Policy does not govern the collection
                  and use of information by companies that Uncommon: Christian
                  Datingdoes not control, nor by individuals not employed or
                  managed by us. If you visit a website that we mention or link
                  to, be sure to review its privacy policy before providing the
                  site with information. It is highly recommended and suggested
                  that you review the privacy policies and statements of any
                  website you choose to use or frequent to better understand the
                  way in which websites garner, make use of and share the
                  information collected.
                </p>
              </div>
              <div>
                <p>
                  Specifically, this Policy will inform you of the following
                </p>
                <ol>
                  <li>
                    What personally identifiable information is collected from
                    you through our website;
                  </li>
                  <li>
                    Why we collect personally identifiable information and the
                    legal basis for such collection;
                  </li>
                  <li>
                    How we use the collected information and with whom it may be
                    shared;
                  </li>
                  <li>
                    What choices are available to you regarding the use of your
                    data; and
                  </li>
                  <li>
                    The security procedures in place to protect the misuse of
                    your information.
                  </li>
                </ol>
              </div>

              <div>
                <h6>
                  <u>Information We Collect</u>
                </h6>
                <p>
                  It is always up to you whether to disclose personally
                  identifiable information to us, although if you elect not to
                  do so, we reserve the right not to register you as a user or
                  provide you with any products or services. This website
                  collects various types of information, such as:
                </p>
                <ul>
                  <li>
                    Voluntarily provided information which may include your
                    name, address, email address, billing and/or credit card
                    information etc. which may be used when you purchase
                    products and/or services and to deliver the services you
                    have requested.
                  </li>
                  <li>
                    Information automatically collected when visiting our
                    website, which may include cookies, third party tracking
                    technologies and server logs.
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  In addition, Uncommon: Christian Dating may have the occasion
                  to collect non-personal anonymous demographic information,
                  such as age, gender, household income, political affiliation,
                  race and religion, as well as the type of browser you are
                  using, IP address, or type of operating system, which will
                  assist us in providing and maintaining superior quality
                  service.
                </p>
              </div>
              <div>
                <p>
                  Uncommon: Christian Datingmay also deem it necessary, from
                  time to time, to follow websites that our users may frequent
                  to gleam what types of services and products may be the most
                  popular to customers or the general public.
                </p>
              </div>
              <div>
                <p>
                  Please rest assured that this site will only collect personal
                  information that you knowingly and willingly provide to us by
                  way of surveys, completed membership forms, and emails. It is
                  the intent of this site to use personal information only for
                  the purpose for which it was requested, and any additional
                  uses specifically provided for on this Policy.
                </p>
              </div>
              <div>
                <h6>
                  <u>Why We Collect Information and For How Long</u>
                </h6>
                <p>We are collecting your data for several reasons:</p>
                <ul>
                  <li>
                    To better understand your needs and provide you with the
                    services you have requested;
                  </li>
                  <li>
                    To fulfill our legitimate interest in improving our services
                    and products;
                  </li>
                  <li>
                    To send you promotional emails containing information we
                    think you may like when we have your consent to do so;
                  </li>
                  <li>
                    To contact you to fill out surveys or participate in other
                    types of market research, when we have your consent to do
                    so;
                  </li>
                  <li>
                    To customize our website according to your online behavior
                    and personal preferences.
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  The data we collect from you will be stored for no longer than
                  necessary. The length of time we retain said information will
                  be determined based upon the following criteria: the length of
                  time your personal information remains relevant; the length of
                  time it is reasonable to keep records to demonstrate that we
                  have fulfilled our duties and obligations; any limitation
                  periods within which claims might be made; any retention
                  periods prescribed by law or recommended by regulators,
                  professional bodies or associations; the type of contract we
                  have with you, the existence of your consent, and our
                  legitimate interest in keeping such information as stated in
                  this Policy.
                </p>
              </div>
              <div>
                <h6>
                  <u>Use of Information Collected</u>
                </h6>
                <p>
                  Uncommon: Christian Dating does not now, nor will it in the
                  future, sell, rent or lease any of its customer lists and/or
                  names to any third parties.
                </p>
              </div>
              <div>
                <p>
                  Uncommon: Christian Dating may collect and may make use of
                  personal information to assist in the operation of our website
                  and to ensure delivery of the services you need and request.
                  At times, we may find it necessary to use personally
                  identifiable information as a means to keep you informed of
                  other possible products and/or services that may be available
                  to you from www.uncommonchristiandating.com
                </p>
              </div>
              <div>
                <p>
                  Uncommon: Christian Dating may also be in contact with you
                  with regards to completing surveys and/or research
                  questionnaires related to your opinion of current or potential
                  future services that may be offered.
                </p>
              </div>
              <div>
                <p>
                  Uncommon: Christian Datinguses various third-party social
                  media features including but not limited to Facebook,
                  Instagram, Twitter and other interactive programs. These may
                  collect your IP address and require cookies to work properly.
                  These services are governed by the privacy policies of the
                  providers and are not within Uncommon: Christian Dating's
                  control.
                </p>
              </div>
              <div>
                <h6>
                  <u>Disclosure of Information</u>
                </h6>
                <p>
                  Uncommon: Christian Dating may not use or disclose the
                  information provided by you except under the following
                  circumstances:
                </p>
                <ul>
                  <li>
                    as necessary to provide services or products you have
                    ordered;
                  </li>
                  <li>
                    in other ways described in this Policy or to which you have
                    otherwise consented;
                  </li>
                  <li>
                    in the aggregate with other information in such a way so
                    that your identity cannot reasonably be determined;
                  </li>
                  <li>
                    as required by law, or in response to a subpoena or search
                    warrant;
                  </li>
                  <li>
                    to outside auditors who have agreed to keep the information
                    confidential;
                  </li>
                  <li>as necessary to enforce the Terms of Service;</li>
                  <li>
                    as necessary to maintain, safeguard and preserve all the
                    rights and property of Uncommon: Christian Dating.
                  </li>
                </ul>
              </div>
              <div>
                <h6>
                  <u>Non-Marketing Purposes</u>
                </h6>
                <p>
                  Uncommon: Christian Dating greatly respects your privacy. We
                  do maintain and reserve the right to contact you if needed for
                  non-marketing purposes (such as bug alerts, security breaches,
                  account issues, and/or changes in Uncommon: Christian Dating
                  products and services). In certain circumstances, we may use
                  our website, newspapers, or other public means to post a
                  notice.
                </p>
              </div>
              <div>
                <h6>
                  <u>Children under the age of 13</u>
                </h6>
                <p>
                  Uncommon: Christian Dating's website is not directed to, and
                  does not knowingly collect personal identifiable information
                  from, children under the age of thirteen (13). If it is
                  determined that such information has been inadvertently
                  collected on anyone under the age of thirteen (13), we shall
                  immediately take the necessary steps to ensure that such
                  information is deleted from our system's database, or in the
                  alternative, that verifiable parental consent is obtained for
                  the use and storage of such information. Anyone under the age
                  of thirteen (13) must seek and obtain parent or guardian
                  permission to use this website.
                </p>
              </div>
              <div>
                <h6>
                  <u>Unsubscribe or Opt-Out</u>
                </h6>
                <p>
                  All users and visitors to our website have the option to
                  discontinue receiving communications from us by way of email
                  or newsletters. To discontinue or unsubscribe from our website
                  please send an email that you wish to unsubscribe to
                  uncommonchristiandating@gmail.com. If you wish to unsubscribe
                  or opt-out from any third-party websites, you must go to that
                  specific website to unsubscribe or opt-out. Uncommon:
                  Christian Dating will continue to adhere to this Policy with
                  respect to any personal information previously collected.
                </p>
              </div>
              <div>
                <h6>
                  <u>Links to Other Websites</u>
                </h6>
                <p>
                  Our website does contain links to affiliate and other
                  websites. Uncommon: Christian Dating does not claim nor accept
                  responsibility for any privacy policies, practices and/or
                  procedures of other such websites. Therefore, we encourage all
                  users and visitors to be aware when they leave our website and
                  to read the privacy statements of every website that collects
                  personally identifiable information. This Privacy Policy
                  Agreement applies only and solely to the information collected
                  by our website.
                </p>
              </div>
              <div>
                <h6>
                  <u>Notice to European Union Users</u>
                </h6>
                <p>
                  Uncommon: Christian Dating's operations are located primarily
                  in the United States. If you provide information to us, the
                  information will be transferred out of the European Union (EU)
                  and sent to the United States. (The adequacy decision on the
                  EU-US Privacy became operational on August 1, 2016. This
                  framework protects the fundamental rights of anyone in the EU
                  whose personal data is transferred to the United States for
                  commercial purposes. It allows the free transfer of data to
                  companies that are certified in the US under the Privacy
                  Shield.) By providing personal information to us, you are
                  consenting to its storage and use as described in this Policy.
                </p>
              </div>
              <div>
                <h6>
                  <u>Security</u>
                </h6>
                <p>
                  Uncommon: Christian Dating takes precautions to protect your
                  information. When you submit sensitive information via the
                  website, your information is protected both online and
                  offline. Wherever we collect sensitive information (e.g.
                  credit card information), that information is encrypted and
                  transmitted to us in a secure way. You can verify this by
                  looking for a lock icon in the address bar and looking for
                  "https" at the beginning of the address of the webpage.
                </p>
                <p>
                  While we use encryption to protect sensitive information
                  transmitted online, we also protect your information offline.
                  Only employees who need the information to perform a specific
                  job (for example, billing or customer service) are granted
                  access to personally identifiable information. The computers
                  and servers in which we store personally identifiable
                  information are kept in a secure environment. This is all done
                  to prevent any loss, misuse, unauthorized access, disclosure
                  or modification of the user's personal information under our
                  control.
                </p>
                <p>
                  The company also uses Secure Socket Layer (SSL) for
                  authentication and private communications to build users'
                  trust and confidence in the internet and website use by
                  providing simple and secure access and communication of credit
                  card and personal information. In addition, Uncommon:
                  Christian Dating is a licensee of TRUSTe. The website is also
                  secured by VeriSign.
                </p>
              </div>
              <div>
                <h6>
                  <u>Acceptance of Terms</u>
                </h6>
                <p>
                  By using this website, you are hereby accepting the terms and
                  conditions stipulated within the Privacy Policy Agreement. If
                  you are not in agreement with our terms and conditions, then
                  you should refrain from further use of our sites. In addition,
                  your continued use of our website following the posting of any
                  updates or changes to our terms and conditions shall mean that
                  you agree and acceptance of such changes.
                </p>
              </div>
              <div>
                <h6>
                  <u>How to Contact Us</u>
                </h6>
                <p>
                  If you have any questions or concerns regarding the Privacy
                  Policy Agreement related to our website, please feel free to
                  contact us at the following email, telephone number or mailing
                  address.
                </p>
                <p>
                  <b>Email:</b> uncommonchristiandating@gmail.com
                </p>
                <p>
                  <b>Telephone Number:</b> 682-717-3804
                </p>
                <p style={{}} className="mb-0">
                  <b>Mailing Address:</b>
                </p>
                <p className="mb-0">Uncommon: Christian Dating</p>
                <p className="mb-0">6025 Clipper Ln</p>
                <p className="mb-0">Fort Worth, Texas</p>
                <p className="mb-0">76179</p>
              </div>
              <div className="mt-5">
                <h6>GDPR Disclosure:</h6>
                <p>
                  If you answered "yes" to the question Does your website comply
                  with the General Data Protection Regulation ("GDPR")? then the
                  Privacy Policy above includes language that is meant to
                  account for such compliance. Nevertheless, in order to be
                  fully compliant with GDPR regulations your company must
                  fulfill other requirements such as: (i) doing an assessment of
                  data processing activities to improve security; (ii) have a
                  data processing agreement with any third party vendors; (iii)
                  appoint a data protection officer for the company to monitor
                  GDPR compliance; (iv) designate a representative based in the
                  EU under certain circumstances; and (v) have a protocol in
                  place to handle a potential data breach. For more details on
                  how to make sure your company is fully compliant with GDPR,
                  please visit the official website at <span><a href="https://gdpr.eu.">https://gdpr.eu.</a> </span> 
                  FormSwift and its subsidiaries are in no way responsible for
                  determining whether or not your company is in fact compliant
                  with GDPR and takes no responsibility for the use you make of
                  this Privacy Policy or for any potential liability your
                  company may face in relation to any GDPR compliance issues.
                </p>
              </div>
              <div>
                <p>
                  This Privacy Policy presumes that your website is not directed
                  at children under the age of 13 and does not knowingly collect
                  personal identifiable information from them or allow others to
                  do the same through your site. If this is not true for your
                  website or online service and you do collect such information
                  (or allow others to do so), please be aware that you must be
                  compliant with all COPPA regulations and guidelines in order
                  to avoid violations which could lead to law enforcement
                  actions, including civil penalties
                </p>
                <p>
                  In order to be fully compliant with COPPA your website or
                  online service must fulfill other requirements such as: (i)
                  posting a privacy policy which describes not only your
                  practices, but also the practices of any others collecting
                  personal information on your site or service — for example,
                  plug-ins or ad networks; (ii) include a prominent link to your
                  privacy policy anywhere you collect personal information from
                  children; (iii) include a description of parental rights (e.g.
                  that you won't require a child to disclose more information
                  than is reasonably necessary, that they can review their
                  child's personal information, direct you to delete it, and
                  refuse to allow any further collection or use of the child's
                  information, and the procedures to exercise their rights);
                  (iv) give parents "direct notice" of your information
                  practices before collecting information from their children;
                  and (v) obtain the parents' "verifiable consent" before
                  collecting, using or disclosing personal information from a
                  child. For more information on the definition of these terms
                  and how to make sure your website or online service is fully
                  compliant with COPPA please visit
                   <span> <a href="https://www.ftc.gov/tips-advice/business-center/guidance/childrens-online-privacy-protection-rule-six-stepcompliance.">https://www.ftc.gov/tips-advice/business-center/guidance/childrens-online-privacy-protection-rule-six-stepcompliance.</a> </span>
                  FormSwift and its subsidiaries are in no way responsible for
                  determining whether or not your company is in fact compliant
                  with COPPA and takes no responsibility for the use you make of
                  this Privacy Policy or for any potential liability your
                  company may face in relation to any COPPA compliance issues.
                </p>
              </div>

              <div style={{ marginTop: "6rem" }}>
                <Buttons
                  children="Back"
                  onClick={handleRedirect}
                  ButtonStyle="login-btn animation"
                  disabled={false}
                />
              </div>
            </div>
            {/* <Footer /> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Privacy_Policy;
