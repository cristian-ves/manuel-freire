import {  useEffect, useRef, useState } from 'react';
import { gsap, selector } from "gsap";

export const useToggleMenu = () => {

    const [isOpen, setIsOpen] = useState(true)

    const navBarList = useRef();
    const bg = useRef();
    const button = useRef();
    
    const timeLineMenu = useRef();
    const timeLineButton = useRef();

    useEffect(() => {

        gsap.set(navBarList.current,{xPercent: 100})
        gsap.set(bg.current,{opacity: 0})
        
        timeLineMenu.current = gsap.timeline()
            .to(bg.current, {
                opacity: 1,
                duration: 0.1
            })
            .to(navBarList.current, {
                xPercent: 0,
                duration: 0.3
            })

        timeLineButton.current = gsap.timeline()
            .to(button.current.childNodes[0], {
                opacity: 0,
                duration: 0.25
            })
            .to(button.current.childNodes[1], {
                opacity: 1,
                duration: 0.25
            })
    }, []);
    
    useEffect(() => {
        timeLineMenu.current.reversed( isOpen );
        setTimeout(() => {
            // To make elements clickeable when menu it's closed
            document.getElementsByTagName('header')[0].style.height = isOpen ? "3.5rem" : "100%";
        }, isOpen ? 500 : 0);
        timeLineButton.current.reversed( isOpen );
    }, [isOpen])

    const toggleNavBarList = () => setIsOpen( !isOpen );


    return {toggleNavBarList, navBarList, bg, button}
}