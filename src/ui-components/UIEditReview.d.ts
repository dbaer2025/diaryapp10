/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UIEditReviewOverridesProps = {
    UIEditReview?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Create Review"?: PrimitiveOverrideProps<TextProps>;
    Divider4113489?: PrimitiveOverrideProps<DividerProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Upload Food Image"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4113494?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4113495?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4113496?: PrimitiveOverrideProps<TextFieldProps>;
    Divider4113497?: PrimitiveOverrideProps<DividerProps>;
    "Frame 322"?: PrimitiveOverrideProps<ViewProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Button4113321?: PrimitiveOverrideProps<ButtonProps>;
    Button4113325?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UIEditReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UIEditReviewOverridesProps | undefined | null;
}>;
export default function UIEditReview(props: UIEditReviewProps): React.ReactElement;
