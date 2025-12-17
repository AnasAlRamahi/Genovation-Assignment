import { AvatarPassThrough } from "primeng/avatar";
import { DrawerPassThrough } from "primeng/drawer";
import { PanelMenuPassThrough } from "primeng/panelmenu";

export const userAvatarPt: AvatarPassThrough = {
  root: {
    class: 'w-10 h-10 border-2 rounded-2xl border-[#464353]'
  },
  image: {
    class: 'w-9.5 h-9.5 rounded-2xl'
  }
};

export const dashboardAvatarPt: AvatarPassThrough = {
  root: {
    class: 'w-12 h-12 rounded-2xl bg-[#00C5D6]',
  },
  image: {
    class: 'w-8 h-8 rounded-2xl'
  },
  label: {
    class: 'hidden'
  }
};

export const menuAvatarIconPt: AvatarPassThrough = {
  root: {
    class: 'w-8 h-8 rounded-[10px]',
  },
  image: {
    class: 'w-5.5 h-5.5 rounded-[10px]'
  },
  label: {
    class: 'hidden'
  }
};

export const menuButtonAvatarPt: AvatarPassThrough = {
  root: {
    class: 'w-7 h-7 bg-transparent border-none',
  },
  icon: {
    class: 'text-[#9E9BAD] bg-transparent'
  },
}

export const drawerPt: DrawerPassThrough = {
  root: {
    class: 'h-fit bg-[#10141A] border-none p-1.25',
  },
  host: {
    class: 'h-fit',
  },
  title: {
    class: '',
    
  },
  content: {
    class: 'h-full'
  },
  pcCloseButton: {
    root: {
      class: 'w-fit'
    },
  }
};

export const panelMenuPt: PanelMenuPassThrough = {
  panel: {
    class: 'w-full h-fit bg-transparent border-none',
  },
  header: {
    class: 'w-full gap-0'
  },
};

export const panelMenuCollapsedPt: PanelMenuPassThrough = {
  panel: {
    class: 'relative z-1000',
  },
  header: {
    class: 'relative z-1000',
  },
  submenu: {
    class: 'bg-white'
  }
};