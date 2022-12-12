import { Children, FamilyTree } from "./personType";

export const familyData: FamilyTree = {
    "Shaan": {
        "name": "Shaan",
        "spouse": "Anga",
        "gender": "Male",
        "coupleId": 1,
        "parentId": 0,
        "id": 1,
        "children": ["Ish", "Chit", "Vich", "Satya"]
    },
    "Anga": {
        "name": "Anga",
        "spouse": "Shan",
        "gender": "Female",
        "coupleId": 1,
        "parentId": 0,
        "id": 2,
        "children": ["Ish", "Chit", "Vich", "Satya"]
    },
    "Ish": {
        "name": "Ish",
        "spouse": "NA",
        "gender": "Male",
        "coupleId": -1,
        "parentId": 1,
        "id": 3,
        "children": []
    },
    "Chit": {
        "name": "Chit",
        "spouse": "Ambi",
        "gender": "Male",
        "coupleId": 2,
        "parentId": 1,
        "id": 4,
        "children": ["Drita", "Vrita"]
    },
    "Ambi": {
        "name": "Ambi",
        "spouse": "Chit",
        "gender": "Female",
        "coupleId": 2,
        "parentId": -1,
        "id": 5,
        "children": ["Drita", "Vrita"]
    },
    "Vich": {
        "name": "Vich",
        "spouse": "Lika",
        "gender": "Male",
        "coupleId": 3,
        "parentId": 1,
        "id": 6,
        "children": ["Vila", "Chika"],
    },
    "Lika": {
        "name": "Lika",
        "spouse": "Vich",
        "gender": "Female",
        "coupleId": 3,
        "parentId": -1,
        "id": 7,
        "children": ["Vila", "Chika"],
    },
    "Satya": {
        "name": "Satya",
        "spouse": "Vyan",
        "gender": "Female",
        "coupleId": 4,
        "parentId": 1,
        "id": 8,
        "children": ["Satvy", "Savya", "Saayan"],
    },
    "Vyan": {
        "name": "Vyan",
        "spouse": "Satya",
        "gender": "Male",
        "coupleId": 4,
        "parentId": -1,
        "id": 9,
        "children": ["Satvy", "Savya", "Saayan"],
    },
    "Drita": {
        "name": "Drita",
        "spouse": "Jaya",
        "gender": "Male",
        "coupleId": 5,
        "parentId": 2,
        "id": 10,
        "children": ["Jata", "Driya"]
    },
    "Jaya": {
        "name": "Jaya",
        "spouse": "Drita",
        "gender": "Female",
        "coupleId": 5,
        "parentId": -1,
        "id": 11,
        "children": ["Jata", "Driya"]
    },
    "Vrita": {
        "name": "Vrita",
        "spouse": "NA",
        "gender": "Male",
        "coupleId": -1,
        "parentId": 2,
        "id": 12,
        "children": []
    },
    "Vila": {
        "name": "Vila",
        "spouse": "Jnki",
        "gender": "Male",
        "coupleId": 6,
        "parentId": 3,
        "id": 13,
        "children": ["Lavanya"]
    },
    "Jnki": {
        "name": "Jnki",
        "spouse": "Vila",
        "gender": "Female",
        "coupleId": 6,
        "parentId": -1,
        "id": 14,
        "children": ["Lavanya"]
    },
    "Chika": {
        "name": "Chika",
        "spouse": "Kpila",
        "gender": "Female",
        "coupleId": 7,
        "parentId": 3,
        "id": 15,
        "children": []
    },
    "Kpila": {
        "name": "Kpila",
        "spouse": "Chika",
        "gender": "Male",
        "coupleId": 7,
        "parentId": -1,
        "id": 16,
        "children": []
    },
    "Satvy": {
        "name": "Satvy",
        "spouse": "Asva",
        "gender": "Female",
        "coupleId": 8,
        "parentId": 4,
        "id": 17,
        "children": []
    },
    "Asva": {
        "name": "Asva",
        "spouse": "Satvy",
        "gender": "Male",
        "coupleId": 8,
        "parentId": -1,
        "id": 18,
        "children": []
    },
    "Savya": {
        "name": "Savya",
        "spouse": "Krpi",
        "gender": "Male",
        "coupleId": 9,
        "parentId": 4,
        "id": 19,
        "children": ["Kriya"]
    },
    "Krpi": {
        "name": "Krpi",
        "spouse": "Savya",
        "gender": "Female",
        "coupleId": 9,
        "parentId": -1,
        "id": 20,
        "children": ["Kriya"]
    },
    "Saayan": {
        "name": "Saayan",
        "spouse": "Mina",
        "gender": "Male",
        "coupleId": 10,
        "parentId": 4,
        "id": 21,
        "children": ["Misa"]
    },
    "Mina": {
        "name": "Mina",
        "spouse": "Saayan",
        "gender": "Female",
        "coupleId": 10,
        "parentId": -1,
        "id": 22,
        "children": ["Misa"]
    },
    "Jata": {
        "name": "Jata",
        "spouse": "NA",
        "gender": "Male",
        "coupleId": -1,
        "parentId": 5,
        "id": 23,
        "children": []
    },
    "Manu": {
        "name": "Manu",
        "spouse": "Driya",
        "gender": "Male",
        "coupleId": 11,
        "parentId": -1,
        "id": 24,
        "children": []
    },
    "Driya": {
        "name": "Driya",
        "spouse": "Manu",
        "gender": "Female",
        "coupleId": 11,
        "parentId": 5,
        "id": 25,
        "children": []
    },
    "Lavanya": {
        "name": "Lavanya",
        "spouse": "Gru",
        "gender": "Female",
        "coupleId": 12,
        "parentId": 6,
        "id": 26,
        "children": []
    },
    "Gru": {
        "name": "Gru",
        "spouse": "Lavanya",
        "gender": "Male",
        "coupleId": 12,
        "parentId": -1,
        "id": 27,
        "children": []
    },
    "Kriya": {
        "name": "Kriya",
        "spouse": "NA",
        "gender": "Male",
        "coupleId": -1,
        "parentId": 9,
        "id": 28,
        "children": []
    },
    "Misa": {
        "name": "Misa",
        "spouse": "NA",
        "gender": "Male",
        "coupleId": -1,
        "parentId": 10,
        "id": 29,
        "children": []
    }
};

export const children: Children = {
    1: ["Ish", "Chit", "Vich", "Satya"],
    2: ["Drita", "Vrita"],
    3: ["Vila", "Chika"],
    4: ["Satvy", "Savya", "Saayan"],
    5: ["Jata", "Driya"],
    6: ["Lavanya"],
    7: [],
    8: [],
    9: ["Kriya"],
    10: ["Misa"],
    11: [],
    12: []
}

export const relations = [
    "Paternal uncle",
    "Maternal uncle",
    "Paternal aunt",
    "Maternal aunt",
    "Sister-in-law",
    "Brother-in-law",
    "Cousins",
    "Father",
    "Mother",
    "Children",
    "Son",
    "Daughter",
    "Brothers",
    "Sisters",
    "grand daughter"
]