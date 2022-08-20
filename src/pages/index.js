import * as React from "react";
import "../styles/index.scss";
import Header from "./header";


const IndexPage = () => {
  return (
    <>
    <Header />
    <main>
        <div className="comingsoon__box">
          <p className="greeting">Hejsan!  Tack för att ni tittade in.</p> 

          <p>Riddargarden är planerad till en mjuk öppning i slutet av september/början av oktober, så vår hemsida är just nu under uppbyggnad..</p>
          
          <p>Under tiden får ni gärna <a href="https://www.facebook.com/profile.php?id=100057297436032" rel="noopener">följa våra framsteg på Facebook</a> - och när det är dags, glöm inte att <a href="https://www.airbnb.com/rooms/41316617" rel="noopener">boka via vår AirBnB-sida</a>. Ser fram emot att höra från er.</p>

          <p className="right">Varma hälsningar,<br />
          Christina och Scott
          </p>

          <p>Hello! Thanks for stopping by.</p> 

          <p>Riddargarden is scheduled for a soft opening in the end of September/early October, so our website is currently under construction.</p>
          
          <p>In the meantime, feel free to <a href="https://www.facebook.com/profile.php?id=100057297436032" rel="noopener">follow our progress on Facebook</a> -- and when it's time, don't forget to <a href="https://www.airbnb.com/rooms/41316617" rel="noopener">book through our AirBnB page</a>. Looking forward to hearing from you.</p>

          <p className="right">Warm Regards,<br />
          Christina and Scott
          </p>
        </div>
    </main>
    </>
  )
}

export default IndexPage
