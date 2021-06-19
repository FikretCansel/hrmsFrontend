import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

export default function JobAdvertisementFilter() {
  const [jobPosition, setPosition] = useState(false);
  const jobPositionToggle = () => setPosition((prevState) => !prevState);
  const [city, setCity] = useState(false);
  const cityToggle = () => setCity((prevState) => !prevState);
  return (
    <div>
        <Dropdown isOpen={jobPosition} toggle={jobPositionToggle}>
          <DropdownToggle caret>İş Pozisyonu</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Pozisyonlar</DropdownItem>
            <DropdownItem>Yazılım Mühendisi</DropdownItem>
            <DropdownItem>Elektrik Mühendisi</DropdownItem>
            <DropdownItem>Makine Mühendisi</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isOpen={city} toggle={cityToggle} style={{marginTop:"5px"}}>
          <DropdownToggle caret>Şehirler</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Şehirler</DropdownItem>
            <DropdownItem>Ankara</DropdownItem>
            <DropdownItem>Konya</DropdownItem>
            <DropdownItem>Istanbul</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button block color="primary"  style={{marginTop:"5px"}}>Filtrele</Button>
    </div>
  );
}
