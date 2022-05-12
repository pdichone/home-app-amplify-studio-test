/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Close(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="96px"
      height="91px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 96, height: 91 }}
      paths={[
        {
          d: "M96 45.5C96 70.629 74.5097 91 48 91C21.4903 91 0 70.629 0 45.5C0 20.371 21.4903 0 48 0C74.5097 0 96 20.371 96 45.5Z",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Close")}
    ></Icon>
  );
}
