import React, { useState } from 'react'
import { familyData, relations } from '../FamilyData'
import { getBroInLaws, getCousins, getGrandKid, getKid, getParents, getSiblings, getSisInLaws, getUnclesAndAunts } from '../utility';

export const Problem1 = () => {
    const [person, setPerson] = useState('Shaan');
    const [relation, setRelation] = useState('Paternal uncle');
    const [output, setOutput] = useState('');



    const handleSubmit = () => {
        switch (relation) {
            case 'Brothers':
                setOutput(getSiblings(familyData, person, 'Male') || 'Not found')
                break;
            case 'Sisters':
                setOutput(getSiblings(familyData, person, 'Male') || 'Not found')
                break;
            case 'Father':
                setOutput(getParents(familyData, person, 'Male') || 'Not found')
                break;
            case 'Mother':
                setOutput(getParents(familyData, person, 'Female') || 'Not found')
                break;
            case 'Son':
                setOutput(getKid(familyData, person, 'Male') || 'Not found')
                break;
            case 'Daughter':
                setOutput(getKid(familyData, person, 'Female') || 'Not found')
                break;
            case 'Children':
                setOutput(familyData[person].children.join())
                break;
            case 'grand daughter':
                setOutput(getGrandKid(familyData, person, 'Female') || 'Not found')
                break;
            case 'Cousins':
                setOutput(getCousins(familyData, person) || 'Not found');
                break;
            case 'Brother-in-law':
                setOutput(getBroInLaws(familyData, person) || 'Not found');
                break;
            case 'Sister-in-law':
                setOutput(getSisInLaws(familyData, person) || 'Not found');
                break;
            case 'Paternal uncle':
                setOutput(getUnclesAndAunts(familyData, person, 'Paternal uncle') || 'Not found');
                break;
            case 'Paternal aunt':
                setOutput(getUnclesAndAunts(familyData, person, 'Paternal aunt') || 'Not found');
                break;
            default: setOutput('Not found');
        }
    }

    const handlePersonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPerson(event.target.value);
    }
    const handleRelationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRelation(event.target.value);
    }



    return (
        <div className="container" data-testid='problem1'>
            <h3>Problem 1</h3>
            <div className="inputDiv">
                <label htmlFor="person" className="label">Person:</label>
                <select id="person" name='person' value={person} onChange={handlePersonChange}>
                    {
                        Object.keys(familyData).map(item =>
                            <option value={item} key={item}>{item}</option>)
                    }
                </select>
            </div>
            <div className="inputDiv">
                <label htmlFor="relation" className="label">Relation:</label>
                <select id="relation" value={relation} onChange={handleRelationChange}>
                    {relations.map(item =>
                        <option value={item} key={item}>{item}</option>)}
                </select>
            </div>
            <div className="buttonDiv">

                <button type="button" onClick={handleSubmit}>Submit</button>
            </div>
            <div className="inputDiv">
                <label className="label" htmlFor="output">Output:</label>
                <span id="output" aria-label="Output:">{` ${output}`}</span>
            </div>
        </div>
    )
}