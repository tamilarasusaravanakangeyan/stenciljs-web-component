export interface MenuItem {
    title: string;
    link?: string;
    children?: MenuItem[];
    expanded?: boolean;
    // isActive: boolean;
    // icon:string
}