export interface Race {
    name: String;
    age: String;
    alignment: String;
    size: String;
    size_description: String;
    speed: Number;
    languages: Object[];
    language_desc: String;
    subraces: Object[];
    traits: Object[];
    ability_bonuses: Number[];
    starting_proficiencies: String[];
    starting_proficiency_options: Object;
}