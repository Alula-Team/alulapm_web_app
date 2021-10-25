import React, { useState, useEffect } from 'react'
import collectIdsAndData from '../../helpers/collectIdsAndData'
import { db } from '../../helpers/firebase_helper_2'
import { query, collection, getDocs, orderBy } from 'firebase/firestore'

const useProperties = () => {
  const [properties, setProperties] = useState([])
  const collectionRef = collection(db, "properties")
  useEffect(() => {
    function listenForProperties(collectionName) {
      const collectionQuery = query(collectionRef, orderBy("address", "asc"))

      onSnapshot(collectionQuery, (querySnapshot) => {
        let docList = []
        querySnapshot.forEach((doc) => {
          docList.push(collectIdsAndData(doc))
        })
        setProperties(docList)
      })

    }
    listenForProperties("properties")
  }, [])
}