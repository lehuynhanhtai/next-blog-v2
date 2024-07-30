'use client';
import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core';
import { BlockNoteView, darkDefaultTheme, lightDefaultTheme, Theme } from '@blocknote/mantine';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { useDarkMode } from '@/context/darkMode-context';
import { uploadFiles } from '@/utils/uploadthing';
import { useEffect, useMemo, useState } from 'react';

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

async function saveToStorage(jsonBlocks: Block[]) {
  localStorage.setItem('editorContent', JSON.stringify(jsonBlocks));
}

async function loadFromStorage() {
  const storageString = localStorage.getItem('editorContent');
  return storageString ? (JSON.parse(storageString) as PartialBlock[]) : undefined;
}

export default function Editor() {
  const { darkMode } = useDarkMode();

  const [initialContent, setInitialContent] = useState<PartialBlock[] | undefined | 'loading'>('loading');

  useEffect(() => {
    loadFromStorage().then(content => {
      setInitialContent(content);
    });
  }, []);

  const editor = useMemo(() => {
    if (initialContent === 'loading') {
      return undefined;
    }
    return BlockNoteEditor.create({
      initialContent,
      uploadFile: async (file: File) => {
        const [res] = await uploadFiles('imageUploader', { files: [file] });
        return res.url;
      },
    });
  }, [initialContent]);

  if (editor === undefined) {
    return 'Loading content...';
  }

  return (
    <BlockNoteView
      editor={editor}
      theme={darkMode ? redTheme.dark : redTheme.light}
      onChange={() => {
        saveToStorage(editor.document);
      }}
      className="min-h-[50vh]"
    />
  );
}
