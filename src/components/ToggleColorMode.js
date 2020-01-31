/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"

/**
 * The light indicator to the right of the toggle
 */
const Indicator = styled.span`
  position: absolute;
  top: 0;
  right: -20px;
  width: 8px;
  height: 25px;
  box-shadow: 0 0 8px #000 inset;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: 0.2s;

  &:before {
    display: inline-block;
    position: absolute;
    content: "";
    top: calc(34%);
    height: 7px;
    width: 5px;
    background: #fbeef3;
    box-shadow: 0 0 9px 3px #fc5881;
    border-radius: 10px;
    transition: 0.1s;
  }
`

/**
 * The characters representing the on-off symbols
 */
const Symbols = styled.div`
  transform-origin: 100% 0;
  box-shadow: 2px 0 1px 0 #d2d2d2 inset;
  background: linear-gradient(
    to right,
    #b9b9b9 0%,
    #cfcfcf 1%,
    #adadad 47%,
    #808080 50%,
    #e7e7e7 100%
  );

  font-family: Poppins, sans-serif;
  border-radius: 3px;
  //line-height: 50px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  text-shadow: 0 1px rgba(255, 255, 255, 0.5);
  transform: scaleX(0.84);
  transition: 0.1s;
  padding: 0 4px;

  &:first-letter {
    letter-spacing: 40px;
  }
`

const CheckBox = styled.input`
  position: absolute;
  visibility: hidden;

  // FIXME: This is targeting the Indicator
  &:checked ~ span:before {
    transition: 0.5s;
    width: 2px;
    background: transparent;
    box-shadow: none;
  }

  // FIXME: this targets the Symbols
  &:checked ~ div {
    transform-origin: 0 0;
    box-shadow: -2px 0 1px 0 #d2d2d2 inset;
    background: linear-gradient(
      to right,
      #e7e7e7 0%,
      #808080 1%,
      #adadad 47%,
      #cfcfcf 50%,
      #b9b9b9 100%
    );
  }
`
const Label = styled.label`
  border: 2px solid #0f222e;
  border-radius: 5px;
  display: inline-block;
  width: 83px;
  height: 34px;
  padding-top: 1px;
  position: relative;
  vertical-align: middle;
  color: #606060;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.4),
    inset 0 2px 1px -1px rgba(255, 255, 255, 0.7), inset 8px 0 5px -5px #2f2f2f,
    inset -8px 0 5px -5px #2f2f2f;
  user-select: none;
  background: #b5b5b5;

  /* bottom shadow of 'upper' side of the button */
  & > b {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    border-radius: 8px;
    -webkit-transform: skewY(5deg);
    transform: skewY(5deg);
    box-shadow: 0 6px 8px -5px #000;
  }

  /* this creates the effect of the 'switch' toggling back & forth */
  & :checked ~ b {
    left: auto;
    right: 0;
    -webkit-transform: skewY(-5deg);
    transform: skewY(-5deg);
  }
`

// TODO: build a simpler version for mobile
const ToggleColorMode = ({ className }) => {
  const [colorMode, setColorMode] = useColorMode()
  const handleToggle = () => {
    setColorMode(colorMode === "default" ? "dark" : "default")
  }
  return (
    <Label className={className}>
      <CheckBox
        type="checkbox"
        onChange={handleToggle}
        checked={colorMode === "dark" || false}
      />
      <Symbols>ΟI</Symbols>
      <b />
      <Indicator />
    </Label>
  )
}

export default ToggleColorMode
