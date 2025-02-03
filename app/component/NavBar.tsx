"use client";

import { Box, BoxProps, Button, Center, HStack, Link } from "@chakra-ui/react";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { clamp, motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion'

function MenuButton(name){
  return(
    <Button
      color="rgb(229, 211, 190)"
      fontSize="16px"
      fontWeight="bold"

    >
      {name}
    </Button>
  )
}

export function NavBar() {
  type BoxTye = {
    color?: "rgb(229, 211, 190)",
    fontSize?: "16px",
    fontWeight?: "bold"
  }

 
  return (
    <Box 
      backgroundColor="#1a1b1f" 
      padding="16px" 
      display="flex" 
      justifyContent="space-between"
      flexDirection="row"
    >
      <Box display="flex" justifyContent="space-between" gap="25px">
        <Button 
          color="rgb(229, 211, 190)"
          fontSize="16px"
          fontWeight="bold" 
        >
          <img src="/balancer.svg" alt="Balancer" />
        </Button>
          {MenuButton("Pools")}
        <Button 
          color="rgb(229, 211, 190)"
          fontSize="16px"
          fontWeight="bold" 
        >
          Swap
        </Button>
        <Button 
          color="rgb(229, 211, 190)"
          fontSize="16px"
          fontWeight="bold" 
        >
          Portfolio
        </Button>
        <Button 
          color="rgb(229, 211, 190)"
          fontSize="16px"
          fontWeight="bold" 
        >
          veBAL
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-between" gap="5px" >
        <Button
          color= "rgb(229, 211, 190)"
          cursor="pointer"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 1px 1px 1px -0.5px, rgba(0, 0, 0, 0.06) 3px 3px 3px -1.5px, rgba(0, 0, 0, 0.1) 6px 6px 6px -3px, rgba(255, 255, 255, 0.2) -0.5px -1px 0px 0px"
          boxSizing="border-box"
          borderBottomColor="rgba(255, 255, 255, 0.16)"
          padding="0px 12px"
          borderRadius="5px"
          fontWeight="bold" 
        >
          <img src="/half-moon.svg" alt="Half Moon" />
        </Button>
        <Button 
          backgroundImage="linear-gradient(135deg, rgb(178, 173, 245) 0%, rgb(215, 203, 231) 40%, rgb(229, 200, 200) 60%, rgb(234, 169, 123) 100%)"
          color="rgb(45, 55, 72)"
          fontSize="1rem"
          font-family="__satoshiFont_f62a92, __satoshiFont_Fallback_f62a92"
          height= "40px"
          padding="0px 28px"
          boxShadow="rgba(144, 134, 253, 0.4) 0px 3px 20px"
          borderRadius="10px"
          cursor="pointer"
          fontWeight="bold" 
        >
          Launch app
        </Button>
      </Box>
    </Box>
  )
}


