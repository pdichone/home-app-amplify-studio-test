/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { Home } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function CardB(props) {
  const { home, overrides, ...rest } = props;
  const buttonThreeOneFiveNineTwoSevenTwoSevenOnClick =
    useDataStoreDeleteAction({ id: home?.id, model: Home, schema: schema });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="319px"
      justifyContent="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CardB")}
    >
      <Image
        height="160px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        height="159px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Price: $"}${home?.price}`}
            {...getOverrideProps(overrides, "$99 USD")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="none"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="4bds 3 ba 2,530 sqft - Active"
            {...getOverrideProps(overrides, "4bds 3 ba 2,530 sqft - Active")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={home?.address}
            {...getOverrideProps(overrides, "832 34th Ave, Seattle, WA 98122")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="164px"
          height="36px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 28")}
        >
          <Button
            display="flex"
            gap="0"
            position="absolute"
            top="0px"
            left="0px"
            direction="row"
            width="34.1px"
            height="36px"
            alignItems="center"
            size="small"
            isDisabled={false}
            variation="link"
            children="Edit"
            {...getOverrideProps(overrides, "Button31592722")}
          ></Button>
          <Button
            display="flex"
            gap="0"
            position="absolute"
            top="0px"
            left="117.87px"
            direction="row"
            width="46.13px"
            height="36px"
            alignItems="center"
            size="small"
            isDisabled={false}
            variation="link"
            children="Delete"
            onClick={() => {
              buttonThreeOneFiveNineTwoSevenTwoSevenOnClick();
            }}
            {...getOverrideProps(overrides, "Button31592727")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
