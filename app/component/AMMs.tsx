"use client";
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight } from "react-feather";

const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);
const MotionBox = motion(Box);

export function AMMs() {
  return (
    <div
      style={{
        backgroundImage: "url('/hero-bg-dark.png')",
        position: "relative",
      }}
    >
      <Box bottom={0} h="100vh" left={0} minH="600ox" right={0} top={0}>
        <AnimatePresence>
          <motion.div></motion.div>
        </AnimatePresence>
      </Box>
      <div>
        <Center>
          <VStack alignItems="start" spacing="xl">
            <MotionText
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                willChange: "opacity, filter",
              }}
              fontSize="14px"
              initial={{
                opacity: 0,
                filter: "blur(3px)",
              }}
              transition={{
                delay: 0.7,
                duration: 0.3,
                delayChildren: 0.5,
                ease: "easeInOut",
              }}
              color="linear-gradient(90deg, rgb(179, 174, 245) 0%, rgb(215, 203, 231) 25%, rgb(229, 200, 200) 50%, rgb(234, 168, 121) 100%)"
            >
              Balancer v3 is live
            </MotionText>
            <MotionText
              color="rgb(229, 211, 190)"
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                willChange: "opacity, filter",
              }}
              fontWeight="bold"
              fontSize="60px"
              initial={{
                opacity: 0,
                filter: "blur(3px)",
              }}
              transition={{
                delay: 0.7,
                duration: 0.3,
                delayChildren: 0.5,
                ease: "easeInOut",
              }}
            >
              AMMs made easy
            </MotionText>
            <MotionHeading
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                willChange: "transform, opacity, filter",
              }}
              as="h2"
              color="font.secondary"
              fontSize={{ base: "xl", md: "2xl" }}
              initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
              maxW="700px"
              transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
              w="full"
              fontSize="24px"
            >
              The ultimate platform for custom liquildity solutions. Balancer v3
              perfectly balances simplicity and flexibility to reshape the
              future of AMMs.
            </MotionHeading>
            <Stack
              alignItems={{ base: "start", md: "center" }}
              direction="row"
              mt="0"
              spacing="ms"
            >
              <MotionButton
                animate={{ opacity: 1, willChange: "opacity" }}
                // href="/"
                initial={{ opacity: 0 }}
                transition={{ duration: 2, delay: 1.2 }}
                backgroundImage="linear-gradient(135deg, rgb(178, 173, 245) 0%, rgb(215, 203, 231) 40%, rgb(229, 200, 200) 60%, rgb(234, 169, 123) 100%)"
                borderRadius="10px"
                padding="0px 16px"
                color="rgb(45, 55, 72)"
                fontSize="18px"
                height="48px"
                fontWeight="600"
                display="flex"
                alignItems="center"
                gap="5px"
                boxShadow="rgba(144, 134, 253, 0.4) 0px 3px 20px 0px"
              >
                View v3 docs
                <img src="/right-arrow.svg" alt="R" />
              </MotionButton>
              <MotionButton
                animate={{ opacity: 1, willChange: "opacity" }}
                // href="/"
                initial={{ opacity: 0 }}
                transition={{ duration: 2, delay: 1.2 }}
                backgroundImage="linear-gradient(rgb(229, 211, 190) 0%, rgb(230, 198, 160) 100%)"
                borderRadius="10px"
                padding="0px 16px"
                color="rgb(45, 55, 72)"
                fontSize="18px"
                height="48px"
                fontWeight="600"
                display="flex"
                alignItems="center"
                gap="5px"
                boxShadow="rgba(229, 197, 158, 0.4) 0px 3px 20px 0px"
              >
                Prototype v3
                <img src="/right-arrow.svg" alt="R" />
              </MotionButton>
            </Stack>
          </VStack>
        </Center>
      </div>
      <Box position="relative" display="flex" flexDirection="row" justifyContent="flex-start">
        <div style={{ borderRadius: "10px" , width: "80px", height: "50px", position: "relative", }}>
            <img src="/sand-1.jpg" alt="sand" style={{ borderRadius: "10px", filter: "brightness(20%) contrast(100%)" }} />
            <Button  height="80%" top="50%" width="50%" left="25%" borderRadius="100%" backgroundImage="linear-gradient(135deg, rgb(178, 173, 245) 0%, rgb(215, 203, 231) 40%, rgb(229, 200, 200) 60%, rgb(234, 169, 123) 100%)" />
            <img src="/pause.svg" alt="pause" style={{  transform: "rotate(270deg)", position: "absolute", top: "-50%", left: "-1.4%", }} />
            
        </div>
        <MotionText position="relative">Learn about Balancer v3</MotionText>
      </Box>
      <Box
        bgGradient="linear(transparent 0%, background.level0 50%, transparent 100%"
        bottom="0"
        h="200px"
        left="0"
        mb="-100px"
        w="full"
      />
    </div>
  );
}
