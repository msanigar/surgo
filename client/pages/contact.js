import React, { Component } from "react";

import Back from "../components/SVG/Back";
import Nav from "../components/Nav";
import Button from "../components/Button";

import "../styles/Main.scss";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.selectablePeople = this.selectablePeople.bind(this);
    this.messageUpdated = this.messageUpdated.bind(this);
    this.fakeMessageUpdated = this.fakeMessageUpdated.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.notice = this.notice.bind(this);

    this.state = {
      selectables: ["Operations", "Sales", "Design"],
      selected: "Operations",
      message: "",
      fakeMessage: "",
      notification: null,
    };
  }

  selectablePeople(val) {
    this.setState({
      selected: val,
    });
  }

  messageUpdated(e) {
    this.setState({
      message: e.target.value,
    });
  }

  fakeMessageUpdated(e) {
    this.setState({
      fakeMessage: e.target.value,
    });
  }

  async sendMessage() {
    const url =
      "https://api.myles.im/wp-content/themes/twentynineteen/email.php";
    if (this.state.message && !this.state.fakeMessage) {
      let body = new FormData();
      body.append(`subject`, `${this.state.selected}`);
      body.append(`message`, `${this.state.message}`);
      try {
        const config = {
          method: "POST",
          body: body,
        };
        const response = await fetch(url, config);
        if (response.ok) {
          this.notice("Your message has been sent!");
          return response;
        } else {
          this.notice("Something went wrong!  Please try again later.");
        }
      } catch (error) {
        this.notice(`Something went wrong!  ${error}`);
      }
    } else {
      this.notice("Please complete the form before sending!");
    }
  }

  notice(msg) {
    // we need to queue these up, this is the best I could come up with quickly
    this.wait = (msg) => {
      if (this.state.notification) {
        setTimeout(() => {
          this.wait(msg);
        }, 500);
      } else {
        this.setState({
          notification: msg,
          message: "",
        });

        setTimeout(() => {
          this.setState({
            notification: null,
          });
        }, 3000);
      }
    };

    this.wait(msg);
  }

  render() {
    const classes = this.state.notification
      ? "contact-notification show"
      : "contact-notification";
    return (
      <React.Fragment>
        <div className='contact'>
          <div className={classes}>
            <p>{this.state.notification}</p>
          </div>
          <div className='container'>
            <div>
              <h3>Contact</h3>
              <p className='people-contact'>Who are you trying to reach?</p>
              <ul className='people-list'>
                {this.state.selectables.map((val, i) => {
                  return (
                    <li
                      key={i}
                      className={val === this.state.selected ? "selected" : ""}
                      onClick={() => this.selectablePeople(val)}
                    >
                      {val}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className='people-contact'>What's your message? </p>
              <textarea
                placeholder=''
                onChange={this.messageUpdated}
                value={this.state.message}
                maxLength='1000'
                cols='30'
                rows='5'
              ></textarea>
              <textarea
                placeholder=''
                onChange={this.fakeMessageUpdated}
                value={this.state.fakeMessage}
                maxLength='1000'
                cols='30'
                rows='5'
                className='fakeMessage'
              ></textarea>
              <div className='btn-container'>
                <Button
                  clickFunc={this.sendMessage}
                  text='Send Message'
                  theme='dark'
                />
              </div>
            </div>
          </div>
        </div>
        <Nav theme={"dark"} />
      </React.Fragment>
    );
  }
}

export default Contact;
