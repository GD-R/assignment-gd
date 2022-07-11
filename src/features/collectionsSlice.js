import { createSlice } from "@reduxjs/toolkit"


const initialValue = {
     collections: []
}


const collectionsSlice = createSlice({
    name: "collections",
    initialState: { value: initialValue },
    reducers: {

        addCollection: (state,action) => {
          state.value.collections.push(action.payload)          
        },

        addSubCollection: (state,action) => {
  
              
                       const find = state.value.collections.find((collection) => {
                                 return collection.id === action.payload.inputId? true : false
                                   })

          state.value.collections =  state.value.collections.map((collection) => {
                   if(collection.id === find.id) {
                    const checkLength = find?.subCollections.length;
                    const newSub = {
                      id:`s${action.payload.random}`, 
                      page:"page", 
                      video:"video", 
                      textEditor:"Enter your text here"
                    }
                    return {
                      ...collection,
                      subCollections: [...collection.subCollections, newSub]
                    }
                   }
                   else {
                    return collection
                   }
          })

        },

      addItem: (state,action) => {
        
        const find = state.value.collections.find((collection) => {
          return collection.subCollections.some((item) => item.id === action.payload.subId)
        })

        

        state.value.collections = state.value.collections.map((collection) => {
         if(collection.id === find.id) {
          const add = collection.subCollections.map((item) => {
            return item.id === action.payload.subId?   {...item, [action.payload.itemValue]: action.payload.itemValue } :  (item)
           })
           return {
             ...collection,
             subCollections: [...add]
           }
         }
         else {
           return collection
         }
       })
    },


    deleteCollection: (state,action) => {
      state.value.collections =  state.value.collections.filter((collection) => {
            return collection.id !== action.payload? true : false
      })
    },


    deleteSubCollection: (state,action) => {
      const find = state.value.collections.find((collection) => {
        return collection.subCollections.some((item) => item.id === action.payload)
     })

     state.value.collections = state.value.collections.map((collection) => {
      if(collection.id === find.id) {
         const filtered =  collection.subCollections.filter((item) => item.id !== action.payload)
         return {
          ...collection,
          subCollections: [...filtered]
         }
      }
      else {
        return collection
      }
 })

    },

    updateTextEditor: (state,action) => {
           state.value.collections = state.value.collections.map((collection,cI) => {
            if(cI == action.payload.colId) {
                
                const updateSub = collection.subCollections.map((sub,sI) => {
                    if(sI == action.payload.subId) {
                        
                         return { ...sub, textEditor: action.payload.iValue }
                    }
                    else {
                        return sub
                    }
                 })
                 
                 
                 return {
                    ...collection,
                    subCollections: [...updateSub]
                 }
            }
            else {
                return collection
            }
    })
    }

    

    }
})

export default collectionsSlice.reducer
export const { addCollection, addSubCollection, addItem, deleteCollection, deleteSubCollection, updateTextEditor } = collectionsSlice.actions