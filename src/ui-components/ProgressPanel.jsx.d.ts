import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type TaskManagementDashboardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ProgressPanel(props: TaskManagementDashboardProps): React.ReactElement;