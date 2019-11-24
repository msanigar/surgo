import React, { Component } from "react";

import Signup from "../components/Signup";
import Button from "../components/Button";

import Back from "../components/SVG/Back";
import Nav from "../components/Nav";

import "../styles/Main.scss";

class faq extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <h3 id="0">How much does Surgo cost?</h3>
            <p>
              We can not give you an accurate price guide for our services -
              This is because every business we work with is different both in
              size and practice. In order to get an accurate figure for pricing,
              you’ll need speak with our representatives and answer a few
              questions. We will ask you about your company, why you want Surgo,
              how many employee’s you want to enroll on our services and the
              length of time you wish to work with us.
            </p>

            <h3 id="1">How long does Surgo take to do?</h3>
            <p>
              Surgo services can take months to fully implement - this, as
              mentioned before (in pricing) is based on the scale of your
              company and the scope of services your company is looking to use.
              All our clients are expected to participate in both a case study
              and pilot programme which can take up to 12 weeks to complete -
              This will prepare your company for the rollout process and ensure
              the quality of service your company recieves moves the needle.
            </p>

            <h3 id="2">Who do we work with? </h3>
            <p>
              Our services brought to you through our unique and exclusive
              partnership agreements. This means you will liase with Surgo’s
              representatives who will then set everything up for you with our
              partners, should you encounter any problems, our representatives
              are responsible for ensuring your experience with our partners and
              Surgo meet expectations.
            </p>

            <h3 id="3">Who runs the programmes?</h3>
            <p>
              Our programmes are deployed through us by our partners to ensure
              the standard in which we work to is kept at the upmost best. Some
              of our programme material is directly handled by Surgo
              representatives, whilst workshops and other affliated events may
              or will be held by our partners.
            </p>

            <h3 id="4">Do you offer sponsorship to teams and events?</h3>
            <p>
              Surgo does offer partnerships with teams and events under some
              circumstances, however we are not looking sponsor teams and/or
              events that want financial support or access to our services
              freely.
            </p>

            <h3 id="5">When is Surgo available?</h3>
            <p>
              As of Q2 2020, Surgo will be ready to onboard more clientele and
              partners. If you are interested in getting Surgo for your
              business, sign up to our newsletter or contact our
              representatives.
            </p>

            <h3 id="6">Why does the case study always come first? </h3>
            <p>
              The case study sheds light on how your company’s employees value
              themselves, their work and their performance on the job. The
              information we gain from the case study helps you and our partners
              understand where the pressure points are for your employee’s -
              making it more effective for us and you to tackle them
              proactively.
            </p>

            <h3 id="7">Why do we need to complete a pilot programme? </h3>
            <p>
              The pilot programme tests our case study theories in a
              sandbox-like enviroment. allowing your most experience staff to
              have input on the effectiveness of our programme material and
              adapt it to suit your companies needs before introducing it to
              more staff. We know that one size doesn’t fit all, this applies
              with the programmes too, should any of the material fail to work
              in the pilot, we have the ability to fix and reassess the material
              before continuing on to a full roll out.
            </p>

            <h3 id="8">Do you offer consultancy with the programmes?</h3>
            <p>
              By joining Surgo, you automatically recieve SoS meetings and have
              access to all our partners support too - helping to cover all the
              bases. Should you or any of your employee’s have concerns or
              questions during the programmes. We can ensure you that there will
              always be someone you can seek help from.
            </p>

            <h2>Keep up to date with what’s going on at Surgo</h2>

            <Signup light={true} />

            <h2 className="bottom">Up for a chat?</h2>
            <h3 className="bottom">
              Whether you want to know more or start a programme{" "}
            </h3>
            <div className="btn-container">
              <Button theme={"dark"} link={"contact"} text={"Contact us"} />
            </div>
          </div>
        </div>
        <Nav theme={"dark"} />
      </React.Fragment>
    );
  }
}

export default faq;
