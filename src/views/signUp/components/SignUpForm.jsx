import React, { useState } from "react";
import { Row, Col, Form, Input, Select, Checkbox, Switch } from "antd";
import styled from "styled-components";
import Button from "../../../components/Button";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { debounce } from "debounce";
// import { useForm } from "react-hook-form";
const { Option } = Select;

const StyledFormWapper = styled(Col)`
  margin-top: 20px;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 40px 57px;
`;

const StyledSwitch = styled(Switch)`
  width: 100%;
  height: 36px;
  background-color: rgb(41, 172, 0);
  & .ant-switch-handle {
    width: 200px;
    height: 31px;
  }
  & .ant-switch-handle::before {
    border-radius: 100px;
    background-color: rgb(221, 247, 221);
  }
  & .ant-switch-checked {
    background-color: rgb(41, 172, 0);
  }
  &.ant-switch-checked .ant-switch-handle {
    left: calc(100% - 200px - 2px);
  }
  & .ant-switch-inner {
    font-size: 20px;
    color: rgb(255, 255, 255);
    margin: 0px 0px 0px 215px;
  }
  &.ant-switch-checked .ant-switch-inner {
    margin: 0px 215px 0px 0px;
  }
`;

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};
const countries = [
  {
    name: "VietNam",
    icon: "https://img.icons8.com/color/40/000000/vietnam.png",
  },
  {
    name: "United State",
    icon: "https://img.icons8.com/cute-clipart/40/000000/usa.png",
  },
  {
    name: "Uruguay",
    icon: "https://img.icons8.com/color/40/000000/uruguay.png",
  },
  {
    name: "England",
    icon: "https://img.icons8.com/ultraviolet/40/000000/england.png",
  },
];

const validateSChema = Yup.object().shape({
  country: Yup.string().required("required"),
  email: Yup.string().email().required("required"),
  password: Yup.string().min(4).required("rewuired"),
  cfmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required(),
});

function SIgnUpForm(props) {
  const [switchChecked, setSwitchChecked] = useState(true);
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
    confirmpassword: false,
    checked1: false,
    checked2: false,
    checked3: false,
  });
  const isFormValid = Object.values(isValid).every((val) => val);
  const {
    control,
    trigger,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validateSChema),
  });

  const onSubmit = (data) => {
    if (switchChecked) data.type = "individual";
    else data.type = "bussiness";
    console.log(data);
  };

  
  return (
    <Row justify="end">
      <StyledFormWapper span={12}>
        <h1>CREATE ACCOUNT</h1>
        <StyledSwitch
          checkedChildren="Individual"
          unCheckedChildren="Business"
          onChange={() => {
            setSwitchChecked(!switchChecked);
            console.log(switchChecked);
          }}
          checked={switchChecked}
        ></StyledSwitch>
        <p>Grow your business globally with borderless transactions.</p>
        <Form
          {...layout}
          size="large"
          initialValues={{ country: "England" }}
          onFinish={handleSubmit(onSubmit)}
        >
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Form.Item
                label="country"
                name="country"
                validateStatus={errors.country ? "error" : "success"}
                help={errors.country ? errors.country.message : null}
                hasFeedback
              >
                <Select
                  {...field}
                  showSearch
                  filterOption={(input, option) =>
                    option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {countries.map((country, index) => (
                    <Option key={index} value={country.name}>
                      <span style={{ paddingRight: "10px" }}>
                        <img src={country.icon} alt="country" />
                      </span>
                      {country.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Form.Item
                label="email"
                name="email"
                validateStatus={errors.email ? "error" : "success"}
                help={errors.email ? errors.email.message : null}
                onChange={debounce(async () => {
                  const result = await trigger("email");
                  setIsValid((prevState) => ({
                    ...prevState,
                    email: result,
                  }));
                }, 500)}
              >
                <Input {...field} />
              </Form.Item>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Form.Item
                label="password"
                name="password"
                validateStatus={errors.password ? "error" : "success"}
                help={errors.password ? errors.password.message : null}
                onChange={debounce(async () => {
                  const result = await trigger("password");
                  setIsValid((prevState) => ({
                    ...prevState,
                    password: result,
                  }));
                }, 500)}
              >
                <Input {...field} />
              </Form.Item>
            )}
          />

          <Controller
            name="cfmpassword"
            control={control}
            render={({ field }) => (
              <Form.Item
                label="confirm password"
                name="cfmpassword"
                validateStatus={errors.cfmpassword ? "error" : "success"}
                help={errors.cfmpassword ? errors.cfmpassword.message : null}
                onChange={debounce(async () => {
                  const result = await trigger("cfnpassword");
                  setIsValid((prevState) => ({
                    ...prevState,
                    confirmpassword: result,
                  }));
                }, 500)}
              >
                <Input.Password {...field} />
              </Form.Item>
            )}
          />

          <Form.Item
            {...tailLayout}
            name="checkbox1"
            valuePropName="checked"
            onChange={() => {
              setIsValid((prevState) => ({
                ...prevState,
                checked1: !prevState.checked1,
              }));
            }}
          >
            <Checkbox>I accept Bitso International's </Checkbox>
          </Form.Item>
          <Form.Item
            {...tailLayout}
            name="checkbox2"
            valuePropName="checked"
            onChange={() => {
              setIsValid((prevState) => ({
                ...prevState,
                checked2: !prevState.checked2,
              }));
            }}
          >
            <Checkbox>I want to receive Bitso news </Checkbox>
          </Form.Item>
          <Form.Item
            {...tailLayout}
            name="checkbox3"
            valuePropName="checked"
            onChange={() => {
              setIsValid((prevState) => ({
                ...prevState,
                checked3: !prevState.checked3,
              }));
            }}
          >
            <Checkbox>I accept Bitso's </Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              label="Sign Up"
              backgroundColor={
                isFormValid ? "rgb(41, 172, 0)" : "rgb(248, 249, 252)"
              }
              borderWidth="0"
              fontSize="16px"
              type="submit"
              disabled={!isFormValid}
            ></Button>
          </Form.Item>
        </Form>
      </StyledFormWapper>
    </Row>
  );
}

export default SIgnUpForm;
