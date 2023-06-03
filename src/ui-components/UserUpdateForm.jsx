/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user: userModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    oauthID: "",
    oauthProvider: "",
    name: "",
    email: "",
    nationalID: "",
    dateOfBirth: "",
    phoneNumber: "",
  };
  const [oauthID, setOauthID] = React.useState(initialValues.oauthID);
  const [oauthProvider, setOauthProvider] = React.useState(
    initialValues.oauthProvider
  );
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [nationalID, setNationalID] = React.useState(initialValues.nationalID);
  const [dateOfBirth, setDateOfBirth] = React.useState(
    initialValues.dateOfBirth
  );
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setOauthID(cleanValues.oauthID);
    setOauthProvider(cleanValues.oauthProvider);
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setNationalID(cleanValues.nationalID);
    setDateOfBirth(cleanValues.dateOfBirth);
    setPhoneNumber(cleanValues.phoneNumber);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(User, idProp)
        : userModelProp;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    oauthID: [{ type: "Required" }],
    oauthProvider: [{ type: "Required" }],
    name: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    nationalID: [{ type: "Required" }],
    dateOfBirth: [{ type: "Required" }],
    phoneNumber: [{ type: "Required" }, { type: "Phone" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          oauthID,
          oauthProvider,
          name,
          email,
          nationalID,
          dateOfBirth,
          phoneNumber,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            User.copyOf(userRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
      <TextField
        label="Oauth id"
        isRequired={true}
        isReadOnly={false}
        value={oauthID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              oauthID: value,
              oauthProvider,
              name,
              email,
              nationalID,
              dateOfBirth,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.oauthID ?? value;
          }
          if (errors.oauthID?.hasError) {
            runValidationTasks("oauthID", value);
          }
          setOauthID(value);
        }}
        onBlur={() => runValidationTasks("oauthID", oauthID)}
        errorMessage={errors.oauthID?.errorMessage}
        hasError={errors.oauthID?.hasError}
        {...getOverrideProps(overrides, "oauthID")}
      ></TextField>
      <TextField
        label="Oauth provider"
        isRequired={true}
        isReadOnly={false}
        value={oauthProvider}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              oauthID,
              oauthProvider: value,
              name,
              email,
              nationalID,
              dateOfBirth,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.oauthProvider ?? value;
          }
          if (errors.oauthProvider?.hasError) {
            runValidationTasks("oauthProvider", value);
          }
          setOauthProvider(value);
        }}
        onBlur={() => runValidationTasks("oauthProvider", oauthProvider)}
        errorMessage={errors.oauthProvider?.errorMessage}
        hasError={errors.oauthProvider?.hasError}
        {...getOverrideProps(overrides, "oauthProvider")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              oauthID,
              oauthProvider,
              name: value,
              email,
              nationalID,
              dateOfBirth,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              oauthID,
              oauthProvider,
              name,
              email: value,
              nationalID,
              dateOfBirth,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="National id"
        isRequired={true}
        isReadOnly={false}
        value={nationalID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              oauthID,
              oauthProvider,
              name,
              email,
              nationalID: value,
              dateOfBirth,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.nationalID ?? value;
          }
          if (errors.nationalID?.hasError) {
            runValidationTasks("nationalID", value);
          }
          setNationalID(value);
        }}
        onBlur={() => runValidationTasks("nationalID", nationalID)}
        errorMessage={errors.nationalID?.errorMessage}
        hasError={errors.nationalID?.hasError}
        {...getOverrideProps(overrides, "nationalID")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dateOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              oauthID,
              oauthProvider,
              name,
              email,
              nationalID,
              dateOfBirth: value,
              phoneNumber,
            };
            const result = onChange(modelFields);
            value = result?.dateOfBirth ?? value;
          }
          if (errors.dateOfBirth?.hasError) {
            runValidationTasks("dateOfBirth", value);
          }
          setDateOfBirth(value);
        }}
        onBlur={() => runValidationTasks("dateOfBirth", dateOfBirth)}
        errorMessage={errors.dateOfBirth?.errorMessage}
        hasError={errors.dateOfBirth?.hasError}
        {...getOverrideProps(overrides, "dateOfBirth")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              oauthID,
              oauthProvider,
              name,
              email,
              nationalID,
              dateOfBirth,
              phoneNumber: value,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
