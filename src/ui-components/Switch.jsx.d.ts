/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type SwitchProps = React.PropsWithChildren<Partial<ViewProps> & {
    state1?: "Selected" | "Unselected";
    state2?: "Off" | "On";
    type?: "Disabled" | "Enabled";
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Switch(props: SwitchProps): React.ReactElement;
