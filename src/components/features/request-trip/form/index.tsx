'use client';

import { Button, Field, FieldGroup, Input, Label } from "@/components/ui/form";
import { useRequestTripForm } from "./_hooks/use-request-trip-form";

export const RequestTripForm = () => {
  const {
    register,
    errors,
  } = useRequestTripForm();

  return (
    <form>
      <FieldGroup>
        <Field>
          <Label htmlFor="hotel-inn">ホテル・宿</Label>
          <Input type="text" id="hotel-inn" {...register('hotelInn')} />
        </Field>
        <Field>
          <Label htmlFor="name">お名前</Label>
          <Input type="text" id="name" {...register('name')} />
        </Field>
        <Field>
          <Label htmlFor="email">メールアドレス</Label>
          <Input type="email" id="email" {...register('email')} />
        </Field>
        <div className="text-center">
          <Button type="submit">Submit</Button>
        </div>

        <p className="text-red-500">{errors?.hotelInn?.message || ''}</p>
        <p className="text-red-500">{errors?.name?.message || ''}</p>
        <p className="text-red-500">{errors?.email?.message || ''}</p>
      </FieldGroup>
    </form>
  )
};