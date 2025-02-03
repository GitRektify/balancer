'use client';

import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
        tokens: {
            colors: {},
        },
    },
})

const theme = createSystem(config)

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChakraProvider value={theme}>{children}</ChakraProvider>
  );
}
