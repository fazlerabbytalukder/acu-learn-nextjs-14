'use client'
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function Test() {
    const handleClick = (mode) => {
        mode ? toast.success("Test success") : toast.error("Test Error");
    }
    return (
        <Button onClick={() => handleClick(true)}>Test toast</Button>
    );
}