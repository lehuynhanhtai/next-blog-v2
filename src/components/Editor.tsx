'use client';
import { BlockNoteEditor, PartialBlock } from '@blocknote/core';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView, darkDefaultTheme, lightDefaultTheme, Theme } from '@blocknote/mantine';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { useDarkMode } from '@/context/darkMode-context';

type EditorProps = {
  onChange: () => void;
  initalContent?: string;
  editTable?: boolean;
};

const lightRedTheme = {
  colors: {
    editor: {
      text: '#222222',
      background: '#ffffff',
    },
    menu: {
      text: 'black',
      background: '#F7F7F7',
    },
    tooltip: {
      text: '#ffffff',
      background: '#5A6C8A',
    },
    hovered: {
      text: 'black',
      background: '#5A6C8A',
    },
    selected: {
      text: '#ffffff',
      background: '#5A6C8A',
    },
    disabled: {
      text: 'black',
      background: '#5A6C8A',
    },
    shadow: '#BFC0C3',
    border: '#565656',
    sideMenu: '#BFC0C3',
    highlights: lightDefaultTheme.colors!.highlights,
  },
  borderRadius: 4,
  fontFamily: 'Helvetica Neue, sans-serif',
} satisfies Theme;

const darkRedTheme = {
  ...lightRedTheme,
  colors: {
    ...lightRedTheme.colors,
    editor: {
      text: '#ffffff',
      background: '#374151',
    },
    sideMenu: '#ffffff',
    highlights: darkDefaultTheme.colors!.highlights,
  },
} satisfies Theme;

const redTheme = {
  light: lightRedTheme,
  dark: darkRedTheme,
};

export default function Editor({ onChange, initalContent, editTable }: EditorProps) {
  const { darkMode } = useDarkMode();
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initalContent ? (JSON.parse(initalContent) as PartialBlock[]) : undefined,
  });

  return <BlockNoteView editor={editor} editable={editTable} theme={darkMode ? redTheme.dark : redTheme.light} onChange={onChange} />;
}
