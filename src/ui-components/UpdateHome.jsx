/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Home } from "../models";
import { schema } from "../models/schema";
import { Button, Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function UpdateHome(props) {
  const { home, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenNineTwoEightNineThreeValue,
    setTextFieldTwoNineSevenNineTwoEightNineThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSevenZeroOneFiveValue,
    setTextFieldTwoNineSevenSixSevenZeroOneFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSevenZeroOneFourValue,
    setTextFieldTwoNineSevenSixSevenZeroOneFourValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      image_url: textFieldTwoNineSevenNineTwoEightNineThreeValue,
      price: textFieldTwoNineSevenSixSevenZeroOneFiveValue,
      address: textFieldTwoNineSevenSixSevenZeroOneFourValue,
    },
    id: home?.id,
    model: Home,
    schema: schema,
  });
  return (
    <Flex
      gap="24px"
      direction="row"
      width="616px"
      height="729px"
      alignItems="flex-start"
      position="relative"
      borderRadius="40px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "UpdateHome")}
    >
      <Flex
        gap="0"
        direction="row"
        width="616px"
        alignItems="flex-start"
        grow="1"
        basis="616px"
        height="540px"
        position="relative"
        borderRadius="40px"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(239,240,240,1)"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="616px"
          justifyContent="center"
          alignItems="center"
          grow="1"
          basis="616px"
          height="476px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Divider
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="400"
              color="rgba(35,118,194,1)"
              lineHeight="35px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Update"
              {...getOverrideProps(overrides, "Update")}
            ></Text>
            <TextField
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Address"
              placeholder="123 Sesame Street"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldTwoNineSevenSixSevenZeroOneFourValue}
              onChange={(event) => {
                setTextFieldTwoNineSevenSixSevenZeroOneFourValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField29767014")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Price"
              placeholder="1000"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldTwoNineSevenSixSevenZeroOneFiveValue}
              onChange={(event) => {
                setTextFieldTwoNineSevenSixSevenZeroOneFiveValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField29767015")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Image URL"
              placeholder="Image-url"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldTwoNineSevenNineTwoEightNineThreeValue}
              onChange={(event) => {
                setTextFieldTwoNineSevenNineTwoEightNineThreeValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField29792893")}
            ></TextField>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 410")}
          >
            <Button
              display="flex"
              gap="0"
              direction="row"
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Update"
              onClick={() => {
                buttonOnClick();
              }}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
