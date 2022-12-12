import { FamilyTree, Person } from "./personType";
import { children } from "./FamilyData";
export const getSiblings = (familyData: FamilyTree, person: string, gender: string) => {
    const parent = familyData[person].parentId;
    const kids = children[parent];
    let output: String[] = [];
    kids && kids.map((kid) => {
        if (familyData[kid].gender === gender && familyData[kid].name !== person) { output.push(familyData[kid].name) };
    })
    return output.join(", ");
}


export const getParents = (familyData: FamilyTree, person: string, gender: string) => {
    const coupleId = familyData[person].parentId;
    //console.log(Object.values(familyData));
    const parent: Person | undefined = Object.values(familyData).find((parent: Person) => { return parent.coupleId === coupleId && parent.gender === gender; })
    return parent?.name || '';
}

export const getKid = (familyData: FamilyTree, person: string, gender: string) => {
    const kids = familyData[person].children;
    let output: String[] = [];
    kids && kids.map((kid) => {
        if (familyData[kid].gender === gender) {
            output.push(familyData[kid].name);
        }
    })

    return output.join(", ");
}

export const getGrandKid = (familyData: FamilyTree, person: string, gender: string) => {
    const kids = familyData[person].children;
    let output: String[] = [];
    kids && kids.map(kid => {
        const grandKids = familyData[kid].children;
        grandKids && grandKids.map(grandKid => {
            if (familyData[grandKid].gender === gender) {
                output.push(familyData[grandKid].name);
            }
        })
    })

    return output.join(", ");
}

export const getCousins = (familyData: FamilyTree, person: string) => {
    const parentId = familyData[person].parentId;
    const parent = parentId !== -1 && Object.values(familyData).find(item => {
        if (item.coupleId === parentId) {
            return item;
        }
    });
    const siblings = parent && children[parent.parentId]?.filter(item => item !== parent.name)

    let siblingKids: string[] = []
    if (siblings) {
        siblingKids = siblings.flatMap(sibling => {
            return familyData[sibling].children;
        })
    }

    return siblingKids.join(", ") || '';
}

export const getBroInLaws = (familyData: FamilyTree, person: string) => {

    let output: string[] = [];
    if (familyData[person].parentId !== -1) {
        const kids = children[familyData[person].parentId];
        if (kids) {
            kids.forEach((kid) => {
                if (familyData[kid].gender === 'Female' && familyData[kid].name !== person) {
                    output.push(familyData[kid].spouse);
                }
            })
        }
    } else {
        const spouse = familyData[person].spouse;
        const kids = children[familyData[spouse].parentId]
        if (kids) {
            output = kids.map((kid) => {

                if (familyData[kid].spouse === person) {
                    return '';
                } else if (familyData[kid].gender === 'Female') {
                    return familyData[kid].spouse;
                } else {
                    return familyData[kid].name;
                }
            })
        }
    }
    return output.join(", ");

}

export const getSisInLaws = (familyData: FamilyTree, person: string) => {

    let output: string[] = [];
    if (familyData[person].parentId !== -1) {
        const kids = children[familyData[person].parentId];
        if (kids) {
            kids.forEach((kid) => {
                if (familyData[kid].gender === 'Male' && familyData[kid].name !== person) {
                    output.push(familyData[kid].spouse);
                }
            })
        }
    } else {
        const spouse = familyData[person].spouse;
        const kids = children[familyData[spouse].parentId]
        if (kids) {
            output = kids.map((kid) => {

                if (familyData[kid].spouse === person) {
                    return '';
                } else if (familyData[kid].gender === 'Male') {
                    return familyData[kid].spouse;
                } else {
                    return familyData[kid].name;
                }
            })
        }
    }
    return output.join(", ");

}

export const getUnclesAndAunts = (familyData: FamilyTree, person: string, relation: string) => {
    const parentId = familyData[person].parentId;
    const parent = parentId !== -1 && Object.values(familyData).find(item => {
        if (item.coupleId === parentId) {
            return item;
        }
    });

    let output: string[] = [];
    if (parent && 'Paternal uncle' === relation) {
        const kids = children[parent.parentId]
        output = kids.map(kid => {
            if ('Female' === familyData[kid].gender) {
                return familyData[kid].spouse;
            }
            else if (kid === parent.name) {
                return '';
            }
            else {
                return kid;
            }
        })
    }
    else if (parent && 'Paternal aunt' === relation) {
        const kids = children[parent.parentId]
        output = kids.map(kid => {
            if ('Male' === familyData[kid].gender) {
                return familyData[kid].spouse;
            }
            else if (kid === parent.name) {
                return '';
            }
            else {
                return kid;
            }
        })
    }

    return output.join(", ");
}