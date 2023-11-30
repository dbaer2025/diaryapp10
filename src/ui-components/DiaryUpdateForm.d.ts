/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiaryUpdateFormInputValues = {
    name?: string;
    address?: string;
    website?: string;
};
export declare type DiaryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiaryUpdateFormOverridesProps = {
    DiaryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiaryUpdateFormProps = React.PropsWithChildren<{
    overrides?: DiaryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    diary?: any;
    onSubmit?: (fields: DiaryUpdateFormInputValues) => DiaryUpdateFormInputValues;
    onSuccess?: (fields: DiaryUpdateFormInputValues) => void;
    onError?: (fields: DiaryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiaryUpdateFormInputValues) => DiaryUpdateFormInputValues;
    onValidate?: DiaryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DiaryUpdateForm(props: DiaryUpdateFormProps): React.ReactElement;
