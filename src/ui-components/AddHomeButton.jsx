/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function AddHomeButton(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AddHomeButton")}
    >
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        height="46px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Add Home"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
