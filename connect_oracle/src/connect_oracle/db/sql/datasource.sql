-- A ":result" value of ":*" specifies a vector of records
-- (as hashmaps) will be returned
-- :name all-sources :? :*
-- :doc Get all sources
select * from CIA.CP_DS_MASTER
-- A ":result" value of ":*" specifies a vector of records
-- (as hashmaps) will be returned
-- :name record-volume :? :*
-- :doc Get record-volume 
-- select :i*:column-names ,SUM(RECORDS_LOADED) as b from data_load.ld_loader_log 
-- where 
-- DATE_LOADED > sysdate - 3 
-- AND RECORDS_LOADED IS NOT NULL
-- group by :i*:column-names
-- order by :i*:column-names
select to_char(DATE_LOADED,'YYYYMMDD') as load ,SUM(RECORDS_LOADED) as records from ld_loader_log  A 
where 
DATE_LOADED > sysdate - 30 
AND RECORDS_LOADED IS NOT NULL
group by to_char(DATE_LOADED,'YYYYMMDD')
order by 1 desc
-- A ":result" value of ":*" specifies a vector of records
-- (as hashmaps) will be returned
-- :name execute-function :? :*
-- :doc try run a function
select cia.f_existing_supplier('BB') as result from dual
