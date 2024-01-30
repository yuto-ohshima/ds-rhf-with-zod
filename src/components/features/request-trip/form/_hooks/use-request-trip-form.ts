import { useForm } from "react-hook-form";
import { RequestTripInputZodSchemaInputType, requestTripInputZodSchema } from "../_schema/validation-scehma";
import { zodResolver } from "@hookform/resolvers/zod";

const DEFAULT_VALUES: RequestTripInputZodSchemaInputType = {
  hotelInn: "",
  name: "",
  email: "",
  checkDate: {
    in: "",
    out: "",
  },
}

export const useRequestTripForm = () => {
  const {
    register,
    formState: { isValid, errors },
  } = useForm<RequestTripInputZodSchemaInputType>({
    resolver: zodResolver(requestTripInputZodSchema),
    mode: "all",
    defaultValues: DEFAULT_VALUES
  });

  return {
    register,
    isValid,
    errors,
  }
};