import { useForm } from 'react-hook-form';
import { useState } from 'react';

import CheckBoxFormInnerWrapperStyled from '../../Molecules/CheckBoxFormWrapper/CheckBoxFormInnerWrapperStyled';
import CheckBoxFormOuterWrapperStyled from './../../Molecules/CheckBoxFormWrapper/CheckBoxFormOuterWrapperStyled';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import InputField from '../../Molecules/InputField/InputField';
import InputLabel from '../../Atoms/InputLabel/InputLabel';
import MainButton from '../../Atoms/MainButton/MainButton';
import SelectFieldStyled from '../../Atoms/SelectField/SelectFieldStyled';

const ContestForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const [data, setData] = useState('');
  console.log(data);
  const [chosenClasses, setChosenClasses] = useState([]);

  const judgeArr = [];
  for (let i = 1; i <= watch('judges'); i++) {
    judgeArr.push(i);
  }
  const handleChange = (e) => {
    const checked = e.target.checked;
    const id = e.target.dataset.id;
    checked
      ? setChosenClasses((oldArray) => [...oldArray, id])
      : setChosenClasses(
          chosenClasses.filter((classNumber) => classNumber !== id),
        );
  };
  return (
    <>
      <ColumnWrapper paddingLeftRight={1}>
        <FormWrapper
          onSubmit={handleSubmit((data) => {
            data.obedienceClasses = chosenClasses;
            setData(JSON.stringify(data));
          })}
        >
          <InputField
            labelText="Nazwa zawodów"
            htmlFor="name"
            id="name"
            type="text"
            placeholder="&#xf091; Nazwa zawodów"
            className={errors.name ? 'red-border' : ''}
            {...register('name', {
              required: 'Wpisz prawidłową nazwę konkursu',
              minLength: {
                value: 5,
                message: 'Wpisz prawidłową nazwę zawodów, min. 5 znaków',
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <InputField
            labelText="Oddział ZKwP:"
            htmlFor="department"
            id="department"
            type="text"
            placeholder="&#xf015; Oddział ZKwP"
            className={errors.department ? 'red-border' : ''}
            {...register('department', {
              required: 'Wpisz oddział ZKwP',
              minLength: {
                value: 5,
                message: 'Wpisz prawidłowy oddział ZKwP, min. 5 znaków',
              },
            })}
          />
          {errors.department && <p>{errors.department.message}</p>}
          <InputField
            labelText="Data rozpoczęcia zawodów"
            htmlFor="startingDate"
            id="startingDate"
            type="date"
            placeholder="&#xF007; Data rozpoczęcia zawodów"
            className={errors.startingDate ? 'red-border' : ''}
            {...register('startingDate', {
              required: 'Wybierz datę rozpoczęcia zawodów',
            })}
          />
          {errors.startingDate && <p>{errors.startingDate.message}</p>}
          <InputField
            labelText="Data zakończenia zawodów"
            htmlFor="endingDate"
            id="endingDate"
            type="date"
            placeholder="&#xF007; Data zakończenia zawodów"
            className={errors.endingDate ? 'red-border' : ''}
            {...register('endingDate', {
              required: 'Wybierz datę zakończenia zawodów',
            })}
          />
          {errors.endingDate && <p>{errors.endingDate.message}</p>}
          <InputField
            labelText="Data otwarcia zgłoszeń"
            htmlFor="openingDate"
            id="openingDate"
            type="date"
            placeholder="&#xF007; Data otwarcia zgłoszeń"
            className={errors.openingDate ? 'red-border' : ''}
            {...register('openingDate', {
              required: 'Wybierz datę otwarcia zgłoszeń',
            })}
          />
          {errors.openingDate && <p>{errors.openingDate.message}</p>}
          <InputField
            labelText="Data zamknięcia zgłoszeń"
            htmlFor="closingDate"
            id="closingDate"
            type="date"
            placeholder="&#xF007; Data zamknięcia zgłoszeń"
            className={errors.closingDate ? 'red-border' : ''}
            {...register('closingDate', {
              required: 'Wybierz datę zamknięcia zgłoszeń',
            })}
          />
          {errors.closingDate && <p>{errors.closingDate.message}</p>}
          <InputField
            labelText="Adres zawodów - kraj"
            htmlFor="country"
            id="country"
            type="text"
            placeholder="&#xf015; Adres zawodów - kraj"
            className={errors.country ? 'red-border' : ''}
            {...register('country', {
              required: 'Wpisz kraj w którym odbywają się zawody',
              min: 5,
              maxLength: 99,
            })}
          />
          {errors.country && <p>{errors.country.message}</p>}
          <InputField
            labelText="Adres zawodów - miasto"
            htmlFor="city"
            id="city"
            type="text"
            placeholder="&#xf015; Adres zawodów - miasto"
            className={errors.city ? 'red-border' : ''}
            {...register('city', {
              required: 'Wpisz miasto, w którym odbywają się zawody',
              min: 5,
            })}
          />
          {errors.city && <p>{errors.city.message}</p>}
          <InputField
            labelText="Adres zawodów - numer obiektu"
            htmlFor="number"
            id="number"
            type="number"
            placeholder="&#xf015; Adres zawodów - numer obiektu"
            className={errors.number ? 'red-border' : ''}
            {...register('number', {
              required: 'Podaj numer obiektu (1 - 2000)',
              max: 2000,
              min: 1,
            })}
          />
          {errors.number && <p>{errors.number.message}</p>}
          {errors.number &&
            (errors.number.type === 'max' || errors.number.type === 'min') && (
              <p>Podaj liczbę z zakresu 1-1000 </p>
            )}
          <InputField
            labelText="Adres zawodów - kod pocztowy"
            htmlFor="code"
            id="code"
            type="text"
            pattern="^\d{2}-\d{3}$"
            placeholder="&#xf015;; Adres zawodów - kod pocztowy"
            className={errors.code ? 'red-border' : ''}
            {...register('code', {
              required: 'Podaj kod pocztowy w formacie XX-XXX',
            })}
          />
          {errors.code && <p>{errors.code.message}</p>}
          <InputLabel
            labelText="Wybierz ilość sędziów"
            htmlFor="judges"
          ></InputLabel>
          <SelectFieldStyled
            id="judges"
            defaultValue="Wybierz ilość sędziów"
            placeholder="&#xF007; Wybierz ilość sędziów"
            {...register('judges', { required: true })}
          >
            <option value="0" defaultValue>
              Wybierz ilość sędziów
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </SelectFieldStyled>
          {judgeArr.map((judge, index) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0 1rem',
                }}
                key={index}
              >
                <InputField
                  key={index}
                  labelText={`Sędzia ${judge}`}
                  htmlFor={`judge${judge}`}
                  id={`judge${judge}`}
                  type="text"
                  placeholder={`Sędzia ${judge}`}
                  className={errors[`judge${judge}`] ? 'red-border' : ''}
                  {...register(`judge${judge}`, {
                    required: 'Wpisz imię i nazwisko sędziego',
                    maxLength: 100,
                  })}
                />
                {errors[`judge${judge}`] && (
                  <p>
                    {errors[`judge${judge}`].message} {judge}
                  </p>
                )}
              </div>
            );
          })}
          <InputField
            labelText="Komisarz"
            htmlFor="komisarz"
            id="komisarz"
            type="text"
            placeholder="&#xF007; Komisarz"
            className={errors.komisarz ? 'red-border' : ''}
            {...register('komisarz', {
              required: 'Wpisz imię i nazwisko komisarza',
              min: 3,
              maxLength: 100,
            })}
          />
          {errors.komisarz && <p>{errors.komisarz.message}</p>}
          <InputField
            labelText="Opłata startowa [PLN]"
            htmlFor="opłata"
            id="oplata"
            type="number"
            placeholder="&#xf0d6; Opłata startowa [PLN]"
            className={errors.oplata ? 'red-border' : ''}
            {...register('oplata', {
              required: 'Podaj opłatę startową w PLN',
              max: 1000,
              min: 1,
            })}
          />
          {errors.oplata && <p>{errors.oplata.message}</p>}
          {errors.oplata &&
            (errors.oplata.type === 'max' || errors.oplata.type === 'min') && (
              <p>Podaj liczbę z zakresu 1-1000 </p>
            )}
          <InputField
            labelText="Maksymalna liczba zawodników"
            htmlFor="liczba"
            id="liczba"
            type="number"
            placeholder="&#xF007; Maksymalna liczba zawodników"
            className={errors.liczba ? 'red-border' : ''}
            {...register('liczba', {
              required: 'Podaj maksymalną liczbę zawodników',
              max: 100,
              min: 1,
            })}
          />
          {errors.liczba && <p>{errors.liczba.message}</p>}
          {errors.liczba && <p>Podaj liczbę z zakresu 1-100 </p>}
          <InputLabel labelText="Wybierz planowane klasy" htmlFor="checkboxy" />

          <CheckBoxFormOuterWrapperStyled
            className={chosenClasses.length === 0 ? `red-border` : ''}
          >
            <CheckBoxFormInnerWrapperStyled>
              <div className="checkBoxItem">
                <input
                  name="checkbox0"
                  id="class0"
                  data-id="0"
                  type="checkbox"
                  value="Klasa 0"
                  {...register('checkbox0')}
                  onChange={handleChange}
                />
                <label htmlFor="class0">Klasa 0</label>
              </div>
              <div className="checkBoxItem">
                <input
                  name="checkbox1"
                  id="class1"
                  data-id="1"
                  type="checkbox"
                  value="Klasa 1"
                  {...register('checkbox1')}
                  onChange={handleChange}
                />
                <label htmlFor="class1">Klasa 1</label>
              </div>
              <div className="checkBoxItem">
                <input
                  name="checkbox2"
                  id="class2"
                  data-id="2"
                  type="checkbox"
                  value="Klasa 2"
                  {...register('checkbox2')}
                  onChange={handleChange}
                />
                <label htmlFor="class2">Klasa 2</label>
              </div>
              <div className="checkBoxItem">
                <input
                  name="checkbox3"
                  id="class3"
                  data-id="3"
                  type="checkbox"
                  value="Klasa 3"
                  {...register('checkbox3')}
                  onChange={handleChange}
                />
                <label htmlFor="class3">Klasa 3</label>
              </div>
              {chosenClasses.length === 0 && (
                <p
                  style={{
                    position: 'absolute',
                  }}
                >
                  Wybierz przynajmniej jedną klasę
                </p>
              )}
            </CheckBoxFormInnerWrapperStyled>
          </CheckBoxFormOuterWrapperStyled>
          {chosenClasses.length !== 0 && (
            <>
              <MainButton primary text="zarejestruj nowe zawody" />
            </>
          )}
        </FormWrapper>
        {chosenClasses.length === 0 && (
          <>
            <MainButton secondary disabled text="Dokończ rejestrację" />
          </>
        )}
      </ColumnWrapper>
    </>
  );
};

export default ContestForm;
