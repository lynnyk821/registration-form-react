import DeliveryAddressInputField from "./DeliveryAddressInputField";
import DeliveryButton from "./DeliveryButton";
import DeliveryAddressSelectField from "./DeliveryAddressSelectField";
import TitleInfo from "../../TitleInfo";
import React, {useEffect, useState} from "react";
import {useStorage} from "../../../../../storage/StorageProvider";
import {useForm} from "react-hook-form";
import {fetchData, getCitiesWithCountries, getCountries} from "../../../../../api/fetchData";

export default function DeliveryAddressForm(){
    const url = 'https://countriesnow.space/api/v0.1/countries/population/cities';

    const [cities, setCities] = useState([]);
    const [countries, setCountries] = useState([]);

    const [filteredCities, setFilteredCities] = useState([]);

    const [selectedCity, setSelectedCity] = useState("Ukraine");
    const [selectedCountry, setSelectedCountry] = useState("Select country");
    const [isSelectedCountry, setIsSelectedCountry] = useState(false);

    const {getValue, getStorageItems} = useStorage();
    const {handleSubmit} = useForm();

    useEffect(() => {
        const fetchDataAndSetStates = async () => {
            try {
                const data = await fetchData(url);
                const countriesFromApi = getCountries(data).map((country, index) => ({ id: index, value: country }));
                const citiesFromApi = getCitiesWithCountries(data).map(cityAndCountry => ({ city: cityAndCountry.city, country: cityAndCountry.country }));

                setCountries(countriesFromApi);
                setCities(citiesFromApi);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataAndSetStates();
    }, []);

    const filterCitiesByCountry = (country) => {
        const citiesByCountry = [];
        for(let i = 0; i < cities.length; i++){
            if(cities[i].country === country){
                citiesByCountry.push({id: 0, value: cities[i].city});
            }
        }
        console.log(cities);
        console.log(citiesByCountry);
        return citiesByCountry;
    };

    const onSubmit = () => {
        console.clear();

        const items = getStorageItems();
        console.log("Storage values:");
        for (const key in items) {
            console.log(`${key}: ${getValue(key)}`);
        }
    }

    return (
        <form className="h-[37rem] flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="h-[32rem] p-8 mb-6 rounded-lg border-[1px] border-solid border-[#E2E4E5]">
                <TitleInfo title={"Delivery address"} label={"Used for shipping orders"} />

                <DeliveryAddressInputField label={"Address"} placeholder={"Address"} keyValue={"address"} />

                <DeliveryAddressSelectField
                    label={"City"}
                    widthSelected={"27rem"}
                    selectedValue={selectedCity}
                    keyValue={"city"}
                    disabled={!isSelectedCountry}
                    items={filteredCities}
                    onChangeSelectedValue={setSelectedCity}
                />

                <div className="flex gap-10">
                    <DeliveryAddressSelectField
                        label={"Country"}
                        widthSelected={"11rem"}
                        selectedValue={selectedCountry}
                        keyValue={"country"}
                        items={countries}
                        onChangeSelectedValue={(value) => {
                            setIsSelectedCountry(value !== "Select county")
                            setSelectedCountry(value);
                            setFilteredCities(filterCitiesByCountry(value));
                        }}
                    />

                    <DeliveryAddressInputField label={"Zip code"} placeholder={"Zip code"} keyValue={"zipCode"} />
                </div>

                <DeliveryAddressInputField label={"Optional"} keyValue={"optional"} />
            </div>
            <div className="mt-auto">
                <DeliveryButton type={"submit"}>
                    Save
                </DeliveryButton>
            </div>
        </form>
    );
}
