import { faker, Faker } from "@faker-js/faker";

export class random_Data {
    public static getName(): string {
        return faker.person.fullName();
    }

    static getEmail(): string {
        return faker.internet.email();
    }

    static getPassword(): string {
        return faker.internet.password();
    }

    public static getFirst_Name(): string {
        return faker.person.firstName();
    }

    public static getLast_Name(): string {
        return faker.person.lastName();
    }

    public static get_CompanyName(): string {
        return faker.company.name();
    }

    public static get_Address(): string {
        return faker.location.streetAddress();
    }

    public static get_Country(): string {
        return faker.location.country();
    }
    public static get_State(): string {
        return faker.location.state();
    }
    public static get_City(): string {
        return faker.location.city();
    }
    public static get_PinCode(): string {
        return faker.location.zipCode();
    }

    public static get_MobileNo(): string {
        return faker.phone.number();
    }


}