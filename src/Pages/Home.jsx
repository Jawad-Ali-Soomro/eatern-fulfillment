import React, { useState } from "react";
import Header from "../Components/Header";
import "../Styles/Home.css";
import {
  ArrowRight,
  Binoculars,
  BoxSeam,
  BrightnessHigh,
  CheckCircle,
  CheckCircleFill,
  Command,
  Easel,
  Map,
} from "react-bootstrap-icons";

const Home = () => {
  const [step, setStep] = useState("dashboard");
  return (
    <div>
      <Header />
      <div className="hero flex justify-around">
        <div className="hero-content flex col">
          <h1>Shop · Prepare · Package · Ship</h1>
          <p>Reliable by Global Online Vendors</p>
          <div className="buttons flex">
            <button className="btn-start">Get Started</button>
            <button className="watch-video-btn flex">
              <i className="uil uil-play-circle"></i>Watch Video
            </button>
          </div>
        </div>
        <div className="hero-image flex">
          <img src="./img/hero-img.png" alt="" />
        </div>
      </div>
      <div className="work-flow flex justify-around">
        <div className="work-content flex col">
          <h1>
            How It <span>Works</span>
          </h1>
          <p>
            Eastern isn't your typical third-party logistics (3PL) partner. We
            work hard to make the fulfillment process simple to comprehend and
            painless. There are never any unexpected expenses thanks to our
            dependable customer support and flat rate delivery charges.
          </p>
          <h4>Your inventory is handled by us in three simple steps:</h4>
          <div className="work-steps flex col">
            <div className="step flex justify-between">
              <div className="numbering flex">
                <p>
                  01 <span>Send & Connect</span>
                </p>
              </div>
              <img src="./icons/send.svg" alt="" />
            </div>
            <div className="step flex justify-between">
              <div className="numbering flex">
                <p>
                  02 <span> Store</span>
                </p>
              </div>
              <img src="./icons/shop.svg" alt="" />
            </div>
            <div className="step flex justify-between">
              <div className="numbering flex">
                <p>
                  03 <span>Ship</span>
                </p>
              </div>
              <img src="./icons/truck.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="work-image">
          <img src="./img/why-us.png" alt="" />
        </div>
      </div>
      <div className="services flex col">
        <div className="service-step flex">
          {step == "dashboard" ? (
            <div
              className="main-step flex col"
              style={{ background: "#37517e", color: "white" }}
            >
              <Binoculars className="icon" />
              <p>Dashboard</p>
            </div>
          ) : (
            <div
              className="main-step flex col"
              onClick={() => setStep("dashboard")}
            >
              <Binoculars className="icon" style={{ color: "cyan" }} />
              <p>Dashboard</p>
            </div>
          )}
          {step == "orders" ? (
            <div
              className="main-step flex col"
              style={{ background: "#37517e", color: "white" }}
            >
              <BoxSeam className="icon" />
              <p>Orders</p>
            </div>
          ) : (
            <div
              className="main-step flex col"
              onClick={() => setStep("orders")}
            >
              <BoxSeam className="icon" style={{ color: "indigo" }} />
              <p>Orders</p>
            </div>
          )}
          {step == "inventory" ? (
            <div
              className="main-step flex col"
              style={{ background: "#37517e", color: "white" }}
            >
              <BrightnessHigh className="icon" />
              <p>Inventory</p>
            </div>
          ) : (
            <div
              className="main-step flex col"
              onClick={() => setStep("inventory")}
            >
              <Binoculars className="icon" style={{ color: "teal" }} />
              <p>Inventory</p>
            </div>
          )}
          {step == "inbound" ? (
            <div
              className="main-step flex col"
              style={{ background: "#37517e", color: "white" }}
            >
              <Command className="icon" />
              <p>Inbound Shipments</p>
            </div>
          ) : (
            <div
              className="main-step flex col"
              onClick={() => setStep("inbound")}
            >
              <Command className="icon" style={{ color: "red" }} />
              <p>Inbound Shipments</p>
            </div>
          )}
          {step == "fba" ? (
            <div
              className="main-step flex col"
              style={{ background: "#37517e", color: "white" }}
            >
              <Easel className="icon" />
              <p>FBA Requests</p>
            </div>
          ) : (
            <div className="main-step flex col" onClick={() => setStep("fba")}>
              <Easel className="icon" style={{ color: "red" }} />
              <p>FBA Requests</p>
            </div>
          )}
          {step == "b2b" ? (
            <div
              className="main-step flex col"
              style={{ background: "#37517e", color: "white" }}
            >
              <Map className="icon" />
              <p>B2B Fulfillments</p>
            </div>
          ) : (
            <div className="main-step flex col" onClick={() => setStep("b2b")}>
              <Map className="icon" style={{ color: "orange" }} />
              <p>B2B Fulfillments</p>
            </div>
          )}
        </div>
        {step == "dashboard" ? (
          <p className="main-service-intro">
            Get a full overview of your eCommerce business in seconds. Preview
            all of your important store data all in one place.
          </p>
        ) : (
          this
        )}
        {step == "orders" ? (
          <p className="main-service-intro">
            Through Eastern, you can seamlessly connect to retailers for
            EDI-automated wholesale and retail workflows, and print
            retailer-compliant packing slips. With an expansive set of retailers
            supported, Eastern provides:
          </p>
        ) : (
          this
        )}
        {step == "inventory" ? (
          <p className="main-service-intro">
            Managing inventory can become really frustrating especially when you
            have multiple selling channels. Our in-house software takes all the
            stress off of having to keep track of your inventory.
          </p>
        ) : (
          this
        )}
        {step == "inbound" ? (
          <p className="main-service-intro">
            Send us containers, pallets or individual cartons, and our team will
            turn around all inbound shipments in less than 8 hours so you can
            simply start shipping your products the day they arrive.
          </p>
        ) : (
          this
        )}
        {step == "fba" ? (
          <p className="main-service-intro">
            Keeping up with inventory restrictions from Amazon can be tedious.
            Whether it's an FBA prep or replenishment request, we will take care
            of it within 1 business day. Simply upload your labels to our
            software and we will take it from there.
          </p>
        ) : (
          this
        )}
        {step == "b2b" ? (
          <p className="main-service-intro">
            Through Eastern, you can seamlessly connect to retailers for
            EDI-automated wholesale and retail workflows, and print
            retailer-compliant packing slips. With an expansive set of retailers
            supported, Eastern provides:
          </p>
        ) : (
          this
        )}

        <div className="services-main flex justify-between">
          <div className="service-content flex col">
            <h1>Features</h1>
            <div className="ticked flex" style={{ gap: "10px" }}>
              <CheckCircleFill className="tick" />
              {step == 'dashboard' ? <p>Full Account Overview</p> : this}
              {step == 'orders' ? <p>Same-day Order Processing</p> : this}
              {step == 'inventory' ? <p>Live Inventory Updates.</p> : this}
              {step == 'inbound' ? <p>Same Day Receiving.</p> : this}
              {step == 'fba' ? <p>Same Day Forwarding.</p> : this}
              {step == 'b2b' ? <p> Wholesale order fulfillment: inventory shipped to brick-and-mortar stores or distribution hubs.</p> : this}
            </div>
            <div className="ticked flex" style={{ gap: "10px" }}>
              <CheckCircleFill className="tick" />
              {step == 'dashboard' ? <p>Inventory Status Alerts</p> : this}
              {step == 'orders' ? <p>Real-time Order Reporting</p> : this}
              {step == 'inventory' ? <p>Manage and Transfer Inventory.</p> : this}
              {step == 'inbound' ? <p>Retail Storage Network keeps your inventory closest to your customers.</p> : this}
              {step == 'fba' ? <p>FBA Prep 2 Day Turnaround.</p> : this}
              {step == 'b2b' ? <p>Retailer dropshipping: orders placed on retailers websites and shipped directly to end consumers.</p> : this}
            </div>
            <div className="ticked flex" style={{ gap: "10px" }}>
              {
                step != 'b2b' ? <CheckCircleFill className="tick" /> : this
              }
              {step == 'dashboard' ? <p>Sale Trends</p> : this}
              {step == 'orders' ? <p>Error-free Turn Around.</p> : this}
              {step == 'inventory' ? <p> Inventory Lifecycle (Coming soon).</p> : this}
              {step == 'fba' ? <p>Custom Work Orders for Bundles and more.</p> : this}
            </div>
          </div>
          {step == "dashboard" ? (
            <img src="./img/undraw_dashboard_re_3b76.svg" alt="" />
          ) : (
            this
          )}
          {step == "orders" ? <img src="./features-2.svg" alt="" /> : this}
          {step == "inventory" ? <img src="./features-3.svg" alt="" /> : this}
          {step == "inbound" ? (
            <img src="./img/undraw_order_delivered_re_v4ab.svg" alt="" />
          ) : (
            this
          )}
          {step == "fba" ? (
            <img src="./img/undraw_social_update_re_xhjr.svg" alt="" />
          ) : (
            this
          )}
          {step == "b2b" ? <img src="./img/features-6.svg" alt="" /> : this}
        </div>
      </div>
    </div>
  );
};

export default Home;
