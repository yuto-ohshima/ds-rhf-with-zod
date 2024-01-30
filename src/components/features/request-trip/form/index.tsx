'use client';

import { Field, FieldGroup, Input, Label, Select } from "@/components/ui/form";
import { useRequestTripForm } from "./_hooks/use-request-trip-form";

const CHECK_DATES = [
  {
    value: '2024/01/30',
    label: '2024年1月30日'
  },
  {
    value: '2024/01/31',
    label: '2024年1月31日'
  },
  {
    value: '2024/02/01',
    label: '2024年2月1日'
  },
  {
    value: '2024/02/02',
    label: '2024年2月2日'
  },
  {
    value: '2024/02/03',
    label: '2024年2月3日'
  },
  {
    value: '2024/02/04',
    label: '2024年2月4日'
  },
  {
    value: '2024/02/05',
    label: '2024年2月5日'
  },
  {
    value: '2024/02/06',
    label: '2024年2月6日'
  },
  {
    value: '2024/02/07',
    label: '2024年2月7日'
  },
  {
    value: '2024/02/08',
    label: '2024年2月8日'
  },
  {
    value: '2024/02/09',
    label: '2024年2月9日'
  },
  {
    value: '2024/02/10',
    label: '2024年2月10日'
  },
  {
    value: '2024/02/11',
    label: '2024年2月11日'
  },
  {
    value: '2024/02/12',
    label: '2024年2月12日'
  },
  {
    value: '2024/02/13',
    label: '2024年2月13日'
  },
  {
    value: '2024/02/14',
    label: '2024年2月14日'
  },
  {
    value: '2024/02/15',
    label: '2024年2月15日'
  },
  {
    value: '2024/02/16',
    label: '2024年2月16日'
  },
  {
    value: '2024/02/17',
    label: '2024年2月17日'
  },
  {
    value: '2024/02/18',
    label: '2024年2月18日'
  },
  {
    value: '2024/02/19',
    label: '2024年2月19日'
  },
]; 

export const RequestTripForm = () => {
  const {
    register,
    isValid,
    errors,
  } = useRequestTripForm();

  // Set to true if the form doesn't have any errors.
  const canSubmit = isValid;

  return (
    <form>
      <FieldGroup>
        <Field>
          <Label htmlFor="hotel-inn">ホテル・宿</Label>
          <Input type="text" id="hotel-inn" {...register("hotelInn")} />
        </Field>

        <Field>
          <Label htmlFor="name">お名前</Label>
          <Input type="text" id="name" {...register("name")} />
        </Field>

        <Field>
          <Label htmlFor="email">メールアドレス</Label>
          <Input type="email" id="email" {...register("email")} />
        </Field>

        <div className="grid grid-cols-2 gap-2">
          <Field>
            <Label htmlFor="check-date-in">チェックイン日</Label>
            <Select id="check-date-in" {...register("checkDate.in")}>
              <option value="">チェックイン日を選択</option>
              {CHECK_DATES.map((date) => (
                <option key={date.value} value={date.value}>
                  {date.label}
                </option>
              ))}
            </Select>
          </Field>

          <Field>
            <Label htmlFor="check-date-out">チェックアウト日</Label>
            <Select id="check-date-out" {...register("checkDate.out")}>
              <option value="">チェックアウト日を選択</option>
              {CHECK_DATES.map((date) => (
                <option key={date.value} value={date.value}>
                  {date.label}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <div className="text-center">
          <Input type="submit" disabled={!canSubmit} value="Submit" />
        </div>

        <p className="text-red-500">{errors?.hotelInn?.message || ""}</p>
        <p className="text-red-500">{errors?.name?.message || ""}</p>
        <p className="text-red-500">{errors?.email?.message || ""}</p>
        <p className="text-red-500">{errors?.checkDate?.in?.message || ""}</p>
        <p className="text-red-500">{errors?.checkDate?.out?.message || ""}</p>
      </FieldGroup>
    </form>
  );
};