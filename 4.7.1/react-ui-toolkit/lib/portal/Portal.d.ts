import { default as React, ReactNode } from '../../../../../../node_modules/react';

export interface PortalProps {
    children: ReactNode;
    container?: HTMLElement;
}
export declare const Portal: React.FC<PortalProps>;
export default Portal;
