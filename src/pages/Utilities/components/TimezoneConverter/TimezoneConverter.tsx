import moment from "moment";
import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import "./TimezoneConverter.css";

const EMPTY_DATE_ERROR_MESSAGE = "No complete date was provided";
const INVALID_DATE_ERROR_MESSAGE = "Date provided was invalid";

function TimezoneConverter() {
  const [SGdateTime, setSGDateTime] = useState("");
  const [SFdateTime, setSFDateTime] = useState("");
  const [sgError, setSgError] = useState("");
  const [sfError, setSfError] = useState("");

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "fromdatetime":
        setSGDateTime(value);
        break;
      case "todatetime":
        setSFDateTime(value);
        break;
      default:
        break;
    }
  };

  const getTimeConverterFunction = (
    fromtz: string,
    totz: string,
    setfunc: any,
    seterrorfunc: any,
    timeValue: string
  ) => {
    return async () => {
      if (timeValue.length === 0) {
        seterrorfunc(EMPTY_DATE_ERROR_MESSAGE);
        return;
      }

      const timestamp = moment(timeValue);

      if (!timestamp.isValid()) {
        seterrorfunc(INVALID_DATE_ERROR_MESSAGE);
        return;
      }
      fetch(
        "http://api.timezonedb.com/v2.1/convert-time-zone?" +
          new URLSearchParams({
            key: "DFRMIE2NGTS2",
            format: "json",
            from: fromtz,
            to: totz,
            time: timestamp.unix().toString(),
          })
      )
        .then((res) => res.json())
        .then((data) => {
          // 2021-12-12T00:00
          const datestring = moment
            .unix(data.toTimestamp)
            .format("YYYY-MM-DDTHH:mm");
          setfunc(datestring);
          seterrorfunc("");
        });
    };
  };

  return (
    <Col sm={12}>
      <h1>Timezone Converter</h1>
      <div>
        <div>
          <label htmlFor="fromdatetime">
            <p>Singapore Date</p>
            <p>{sgError}</p>
            <div className="d-flex">
              <input
                id="fromdatetime"
                type="datetime-local"
                name="fromdatetime"
                value={SGdateTime}
                onChange={handleChange}
                style={{
                  borderRadius: "10px 2px 2px 10px",
                  padding: "6px",
                  border: 0,
                }}
              />
              <Button
                style={{ borderRadius: "0 10px 10px 0" }}
                className="confirm-btn"
                onClick={getTimeConverterFunction(
                  "Asia/Singapore",
                  "America/Los_Angeles",
                  setSFDateTime,
                  setSgError,
                  SGdateTime
                )}
              >
                Get the conversion
              </Button>
            </div>
          </label>
          <label className="mt-4" htmlFor="todatetime">
            <p>San Francisco Date</p>
            <p>{sfError}</p>
            <div className="d-flex">
              <input
                id="todatetime"
                type="datetime-local"
                name="todatetime"
                value={SFdateTime}
                onChange={handleChange}
                style={{
                  borderRadius: "10px 2px 2px 10px",
                  padding: "6px",
                  border: 0,
                }}
              />
              <Button
                style={{ borderRadius: "0 10px 10px 0" }}
                className="confirm-btn"
                onClick={getTimeConverterFunction(
                  "America/Los_Angeles",
                  "Asia/Singapore",
                  setSGDateTime,
                  setSfError,
                  SFdateTime
                )}
              >
                Get the conversion
              </Button>
            </div>
          </label>
        </div>
      </div>
    </Col>
  );
}

export default TimezoneConverter;
