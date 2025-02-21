import 'twin.macro';

import { ILayout } from '@/shared/ui/Layout/types.ts';
import { SidebarWidget } from '@/widgets/SidebarWidget';
const Layout = ({ children, sidebarContent, hiddenSidebarItems = [] }: ILayout) => {
  return (
    <div tw='flex gap-[30px]'>
      <SidebarWidget items={sidebarContent} hiddenSidebarItems={hiddenSidebarItems} />
      <div tw='grow'>{children}</div>
    </div>
  );
};

export default Layout;
