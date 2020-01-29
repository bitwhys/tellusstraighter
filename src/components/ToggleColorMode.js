/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
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
    box-shadow: 0 0 4px 4px #FC5881;
    width: 6px;
    background: #f0f9e3;
    transition: 0.1s;
    //------
    position: absolute;
    top: calc(34%);
    content: "";
    display: inline-block;
    height: 8px;
    border-radius: 10px;
  }
`

/**
 * The characters representing the on-off symbols
 */
const Symbols = styled.div`
  transform-origin: 100% 0;
  box-shadow: 2px 0 1px 0 #a6f2fe inset;
  background: linear-gradient(
    to right,
    #cef5ff 0%,
    #33afce 1%,
    #69dcf1 47%,
    #a0f2fe 50%,
    #8fd9e4 100%
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
    box-shadow: -2px 0 1px 0 #a6f2fe inset;
    background: linear-gradient(
      to right,
      #8fd9e4 0%,
      #a0f2fe 53%,
      #69dcf1 56%,
      #33afce 99%,
      #cef5ff 100%
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
  color: #297597;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.4),
    inset 0 2px 1px -1px rgba(255, 255, 255, 0.7), inset 8px 0 5px -5px #02425c,
    inset -8px 0 5px -5px #02425c;
  user-select: none;
  background: #80dce9;

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

const ToggleColorMode = props => {
  const [colorMode, setColorMode] = useColorMode()
  const handleToggle = () => {
    setColorMode(colorMode === "default" ? "dark" : "default")
  }
  return (
    <Label className="checkboxControl">
      <CheckBox type="checkbox" onChange={handleToggle} />
      <Symbols>ΟI</Symbols>
      <b />
      <Indicator />
    </Label>
  )
}

ToggleColorMode.propTypes = {}

export default ToggleColorMode
