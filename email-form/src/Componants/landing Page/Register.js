import { React, useState } from "react";
import "./register.css";
import Popup from "./../../Componants/Popup";
export default function Register() {
  return (
    <>
      <div>
        <form>
          <div className="form-group">
            <label className="sr-only">Name</label>
            <input
              className="form-control"
              id="first-name"
              type="text"
              placeholder=" Name here"
              required="true"
              autoFocus="true"
              onChange={(e) => {}}
            />
          </div>
          <div className="form-group">
            <label className="sr-only">Age</label>
            <input
              className="form-control"
              id="age"
              type="text"
              placeholder="Age here"
              required
              onChange={(e) => {}}
            />
          </div>
          <div className="form-group">
            <label className="sr-only">Mobile</label>
            <input
              className="form-control"
              id="mobile"
              type="number"
              placeholder="Mobile Number here"
              required
              unique="true"
              onChange={(e) => {}}
            />
          </div>
          <div className="form-group">
            <label className="sr-only">Email</label>
            <input
              className="form-control"
              id="email"
              type="text"
              placeholder="Email here"
              required
              unique="true"
              onChange={(e) => {}}
            />
          </div>

          <div className="mt-3">
            <button class="btn btn-lg btn-primary btn-block" type="submit">
              Submit Form
            </button>
          </div>
          <Popup trigger={true}></Popup>
        </form>
      </div>
    </>
  );
}
