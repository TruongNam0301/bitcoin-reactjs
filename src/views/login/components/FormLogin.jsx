import React from "react";
import { Form, Input } from "antd";
import Button from "../../../components/Button";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import debounce from "debounce";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

//layout form
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};
// validate
const validateSchema = Yup.object().shape({
  email: Yup.string().email().required("this filed is required"),
  password: Yup.string().min(4).required("this filed is require"),
});

// form fotmat
function FormLogin(props) {
  const [isValid, setIsValid] = React.useState({
    email: false,
    password: false,
  });
  const isFormValid = Object.values(isValid).every((val) => val);
  const {
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

  const error = useSelector((state) => state.userReducer.error);

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const action = login(data);
    dispatch(action);
  };

  useEffect(() => {
    if (error === "no") {
      history.push("/");
    } else if (error === "yes") {
      alert("your email or password is not correct");
    }
  }, [error]);
  return (
    <Form
      {...layout}
      size="large"
      initialValues={{ username: "default value" }}
      onFinish={handleSubmit(onSubmit)}
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="email"
            validateStatus={errors.email ? "error" : "success"}
            help={errors.email ? errors.email.message : null}
            hasFeedback
            onChange={debounce(async () => {
              const result = await trigger("email");
              setIsValid((prevState) => ({ ...prevState, email: result }));
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
            validateFirst={true}
            validateStatus={errors.password ? "error" : "validating"}
            help={errors.password ? errors.password.message : null}
            onChange={debounce(async () => {
              const result = await trigger("password");
              setIsValid((prevState) => ({ ...prevState, password: result }));
            }, 500)}
          >
            <Input.Password {...field} />
          </Form.Item>
        )}
      />

      <Form.Item wrapperCol={{ offset: 6, span: 8 }}>
        <Button label="FORGOT YOUR PASSWORD?" fontSize="12px" borderWidth="0" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          label="LOG IN"
          backgroundColor={
            isFormValid ? "rgb(41, 172, 0)" : "rgb(248, 249, 252)"
          }
          borderWidth="0"
          fontSize="16px"
          type="submit"
          disabled={!isFormValid}
        />
      </Form.Item>
    </Form>
  );
}

export default FormLogin;
