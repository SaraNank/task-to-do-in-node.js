import taskmodel from "./taskmodel.js";

  const taskController = {
    getAll:async(req,res)=>{
        try{
            const tasks = await taskmodel.find();
            res.json(tasks);
        }catch (e) {
            res.status(400).json({ message: e.message });
          }
    },


    getByStatus:async(req,res)=>{
        const {status} = req.query;
        try{
            let filteredtasks = await taskmodel.find({status});
            res.json(filteredtasks);
        }catch (e) {
            res.status(400).json({ message: e.message });
          }
    },
    getById:async(req,res)=>{
        const {id} =req.params; 
        try{
            const task = await taskmodel.findById({id});
            res.json(task);
        }catch (e) {
            res.status(400).json({ message: e.message });
          }
    },
    updateById:async (req,res)=>{
        const {id} =req.params; 
        try{
            let task = await taskmodel.findByIdAndUpdate(id,req.body,{new:true});
            res.json(task);
        }catch (e) {
            res.status(400).json({ message: e.message });
          }
    },
    addTask:async(req,res)=>{
        const {name}=req.body;
       try{
        const task= await taskmodel.create({name});
       }catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
    deleteTask:async(req,res)=>{
        const {id} =req.params;
        try{
            const task = await taskmodel.findByIdAndDelete({id});
            res.json(task);
        }catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
  }
  export default taskController;