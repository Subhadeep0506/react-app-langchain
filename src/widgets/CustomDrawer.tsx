import React, { useState } from 'react';
import {
    IconButton, Button
} from '@chakra-ui/react';
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { FaHamburger } from "react-icons/fa";

const CustomDrawer: React.FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} placement="start">
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <IconButton variant="outline" size="sm">
                    <FaHamburger />
                </IconButton>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </DrawerBody>
                <DrawerFooter>
                    <DrawerActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerActionTrigger>
                    <Button>Save</Button>
                </DrawerFooter>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    );
};

export default CustomDrawer;