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
export declare type DiaryCreateFormInputValues = {
    name?: string;
    address?: string;
    website?: string;
};
export declare type DiaryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiaryCreateFormOverridesProps = {
    DiaryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiaryCreateFormProps = React.PropsWithChildren<{
    overrides?: DiaryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DiaryCreateFormInputValues) => DiaryCreateFormInputValues;
    onSuccess?: (fields: DiaryCreateFormInputValues) => void;
    onError?: (fields: DiaryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiaryCreateFormInputValues) => DiaryCreateFormInputValues;
    onValidate?: DiaryCreateFormValidationValues;
} & React.CSSProperties>;
export default function DiaryCreateForm(props: DiaryCreateFormProps): React.ReactElement;
