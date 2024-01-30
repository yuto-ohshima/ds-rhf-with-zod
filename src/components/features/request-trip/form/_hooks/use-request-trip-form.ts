import { useForm } from "react-hook-form";
import { RequestTripInputZodSchemaInputType, requestTripInputZodSchema } from "../_schema/validation-scehma";
import { zodResolver } from "@hookform/resolvers/zod";

const DEFAULT_VALUES: RequestTripInputZodSchemaInputType = {
  hotelInn: "",
  name: "",
  email: ""
}

export const useRequestTripForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestTripInputZodSchemaInputType>({
    resolver: zodResolver(requestTripInputZodSchema),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES
  });

  return {
    register,
    handleSubmit,
    errors,
  }
};